/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
  ConflictException,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'prisma/prisma.service';
import * as argon2 from 'argon2';
import axios from 'axios';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  async login(contact: string, password: string) {
    try {
      const user = await this.prisma.user.findFirst({
        where: {
          contact1: contact,
          deletedAt: null,
          status: 'ACTIVE',
        },
      });

      if (!user) {
        this.logger.warn(`Login attempt failed: User not found - ${contact}`);
        throw new UnauthorizedException('Invalid credentials');
      }

      if (!user.password) {
        this.logger.warn(`Login attempt failed: No password set - ${contact}`);
        throw new UnauthorizedException('Invalid credentials');
      }

      const isValid: boolean = await argon2.verify(user.password, password);

      if (!isValid) {
        this.logger.warn(`Login attempt failed: Invalid password - ${contact}`);
        throw new UnauthorizedException('Invalid credentials');
      }

      this.logger.log(`User logged in successfully - ${contact}`);
      // Don't return password
      const { password: _, ...userWithoutPassword } = user;
      return userWithoutPassword;
    } catch (error) {
      if (
        error instanceof UnauthorizedException ||
        error instanceof BadRequestException
      ) {
        throw error;
      }
      this.logger.error(
        `Login error: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
      throw new BadRequestException('Unable to process login request');
    }
  }

  async signup(mobile: string, name: string, password: string) {
    try {
      // Check if user already exists
      const existingUser = await this.prisma.user.findFirst({
        where: { contact1: mobile },
      });

      if (existingUser) {
        this.logger.warn(`Signup failed: User already exists - ${mobile}`);
        throw new ConflictException(
          'User with this mobile number already exists',
        );
      }

      const hashedPassword = await argon2.hash(password);

      const user = await this.prisma.user.create({
        data: {
          contact1: mobile,
          name: name,
          password: hashedPassword,
        },
      });

      this.logger.log(`User registered successfully - ${mobile}`);
      // Don't return password
      const { password: _, ...userWithoutPassword } = user;
      return userWithoutPassword;
    } catch (error) {
      if (
        error instanceof ConflictException ||
        error instanceof BadRequestException
      ) {
        throw error;
      }
      this.logger.error(
        `Signup error: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
      throw new BadRequestException('Unable to process signup request');
    }
  }

  async optLogin(contact: string) {
    try {
      let user = await this.prisma.user.findFirst({
        where: {
          contact1: contact,
          deletedAt: null,
          status: 'ACTIVE',
        },
      });

      if (!user) {
        user = await this.prisma.user.create({
          data: {
            contact1: contact,
            name: 'Guest User',
          },
        });

        if (!user) {
          throw new BadRequestException('User creation failed');
        }
        this.logger.log(`New OTP user created - ${contact}`);
      }

      // Generate and send OTP
      const otp = this.generateOTP(4);

      // Get SMS config from environment
      const smsConfig = this.configService.get<{
        apiKey: string;
        sender: string;
        peId: string;
        tempId: string;
      }>('sms');
      const apiKey = smsConfig?.apiKey || 'c21hcnRUY2g6NUFiMU9GR2U=';
      const sender = smsConfig?.sender || 'DBAWLA';
      const peId = smsConfig?.peId || '1001424959147859474';
      const tempId = smsConfig?.tempId || '1007815568981115610';

      const smsUrl = `https://webpostservice.com/sendsms_v2.0/sendsms.php?apikey=${apiKey}&type=TEXT&sender=${sender}&mobile=${contact}&message=Your%20OTP%20for%20Dabbawala%20App%20Login%20is%20${otp}.The%20OTP%20is%20valid%20for%203%20Mins.&peId=${peId}&tempId=${tempId}`;

      const otp_response = await axios.post<string>(smsUrl);

      if (
        typeof otp_response.data === 'string' &&
        otp_response.data.startsWith('SUBMIT_SUCCESS')
      ) {
        await this.prisma.user.update({
          where: { id: user.id },
          data: { otp: otp },
        });
        this.logger.log(`OTP sent successfully - ${contact}`);
      } else {
        this.logger.error(
          `Failed to send OTP - ${contact}: ${otp_response.data}`,
        );
        throw new BadRequestException('Failed to send OTP');
      }

      // Don't return sensitive data
      const { password: _pwd, otp: _otp, ...userWithoutSensitiveData } = user;
      return userWithoutSensitiveData;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      this.logger.error(
        `OTP Login error: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
      throw new BadRequestException('Unable to process OTP request');
    }
  }

  async verifyOtp(contact: string, otp: string) {
    try {
      const user = await this.prisma.user.findFirst({
        where: {
          contact1: contact,
          deletedAt: null,
          status: 'ACTIVE',
        },
      });

      if (!user) {
        this.logger.warn(
          `OTP verification failed: User not found - ${contact}`,
        );
        throw new UnauthorizedException('Invalid OTP or user not found');
      }

      if (!user.otp || user.otp !== otp) {
        this.logger.warn(`OTP verification failed: Invalid OTP - ${contact}`);
        throw new UnauthorizedException('Invalid OTP or user not found');
      }

      // Clear OTP after successful verification
      await this.prisma.user.update({
        where: { id: user.id },
        data: { otp: null },
      });

      this.logger.log(`OTP verified successfully - ${contact}`);
      // Don't return sensitive data
      const { password: _pwd, otp: _otp, ...userWithoutSensitiveData } = user;
      return userWithoutSensitiveData;
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      this.logger.error(
        `OTP verification error: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
      throw new BadRequestException('Unable to verify OTP');
    }
  }

  generateOTP(len: number): string {
    const digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < len; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
  }
}
