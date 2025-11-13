import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';

export enum SchoolStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  SUSPENDED = 'SUSPENDED',
}

registerEnumType(SchoolStatus, {
  name: 'SchoolStatus',
});

@ObjectType()
export class School {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  phone: string;

  @Field(() => String, { nullable: true })
  alternatePhone?: string;

  @Field(() => String)
  address: string;

  @Field(() => String)
  registrationNumber: string;

  @Field(() => String)
  gstNumber: string;

  @Field(() => String)
  establishedYear: string;

  @Field(() => String)
  website: string;

  @Field(() => String, { nullable: true })
  logo?: string;

  // Operating Hours
  @Field(() => String, { nullable: true })
  dayStartTime?: string;

  @Field(() => String, { nullable: true })
  dayEndTime?: string;

  @Field(() => String, { nullable: true })
  lunchStartTime?: string;

  @Field(() => String, { nullable: true })
  lunchEndTime?: string;

  @Field(() => String, { nullable: true })
  weeklyHoliday?: string;

  // Owner/Contact Person
  @Field(() => String, { nullable: true })
  ownerName?: string;

  @Field(() => String, { nullable: true })
  ownerPhone?: string;

  @Field(() => String, { nullable: true })
  ownerEmail?: string;

  // Bank Details
  @Field(() => String, { nullable: true })
  bankName?: string;

  @Field(() => String, { nullable: true })
  accountNumber?: string;

  @Field(() => String, { nullable: true })
  ifscCode?: string;

  @Field(() => String, { nullable: true })
  branchName?: string;

  // License & Certifications
  @Field(() => String, { nullable: true })
  rtoLicenseNumber?: string;

  @Field(() => Date, { nullable: true })
  rtoLicenseExpiry?: Date;

  @Field(() => String, { nullable: true })
  insuranceProvider?: string;

  @Field(() => String, { nullable: true })
  insurancePolicyNumber?: string;

  @Field(() => Date, { nullable: true })
  insuranceExpiry?: Date;

  // Social Media
  @Field(() => String, { nullable: true })
  facebook?: string;

  @Field(() => String, { nullable: true })
  instagram?: string;

  @Field(() => String, { nullable: true })
  twitter?: string;

  @Field(() => SchoolStatus)
  status: SchoolStatus;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;

  // Relations
  @Field(() => [User], { nullable: true })
  users?: User[];
}
