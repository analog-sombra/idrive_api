import { BadRequestException, Injectable } from '@nestjs/common';
import { SelectedFields } from 'src/utils/methods.js';
import { SearchPaginationInput } from './dto/search-pagination.input';
import * as argon2 from 'argon2';

@Injectable()
export class BaseService<
  T,
  InputType,
  UpdateType,
  WhereSearchInput,
  PaginationType,
  D extends {
    findUnique: (args: any) => Promise<T | null>;
    findFirst: (args: any) => Promise<T | null>;
    findMany: (args: any) => Promise<T[]>;
    count: (args: any) => Promise<number>;
    create: (args: any) => Promise<T>;
    update: (args: any) => Promise<T>;
    delete: (args: any) => Promise<T>;
  },
> {
  constructor(
    private readonly modelName: string,
    protected readonly delegate: D,
  ) {}
  async getById(id: number, fields: SelectedFields) {
    try {
      const item = await this.delegate.findUnique({
        where: { id },
        select: fields,
      });
      if (!item) {
        throw new BadRequestException(
          `${this.modelName} not found with id ${id}`,
        );
      }
      return item;
    } catch (error) {
      throw new BadRequestException(`error: ${error}`);
    }
  }

  async search(whereSearchInput: WhereSearchInput, fields: SelectedFields) {
    try {
      const sample = await this.delegate.findMany({ take: 1 });
      if (!sample || sample.length === 0) {
        throw new BadRequestException(`Could not find ${this.modelName}`);
      }
      const firstRecord = sample[0] as Record<string, any>;

      const hasDeletedAt = 'deletedAt' in firstRecord;
      const hasDeletedById = 'deletedById' in firstRecord;

      const where: Record<string, any> = {};
      if (hasDeletedAt) where.deletedAt = null;
      if (hasDeletedById) where.deletedById = null;

      // Apply search filters from whereSearchInput (including nested)
      const nestedWhere = this.processWhereSearchInput(whereSearchInput);
      Object.assign(where, nestedWhere);

      const item = await this.delegate.findFirst({
        where,
        select: fields,
      });

      return item;
    } catch (error) {
      throw new BadRequestException(`error: ${error}`);
    }
  }

  async getAll(fields: SelectedFields, whereSearchInput: WhereSearchInput) {
    try {
      // Process nested whereSearchInput
      const nestedWhere = this.processWhereSearchInput(whereSearchInput);

      const item = await this.delegate.findMany({
        where: nestedWhere,
        select: fields,
      });
      if (item.length === 0) {
        return [];
      }
      // if (!item) {
      //   throw new BadRequestException(`${this.modelName} not found`);
      // }
      return item;
    } catch (error) {
      throw new BadRequestException(`error: ${error}`);
    }
  }

  async create(input: InputType, fields: SelectedFields) {
    try {
      const processedInput = await this.processPasswordFields(
        input as Record<string, unknown>,
      );
      const item = await this.delegate.create({
        data: processedInput,
        select: fields,
      });

      if (!item) {
        throw new BadRequestException(`Could not create ${this.modelName}`);
      }
      return item;
    } catch (error) {
      throw new BadRequestException(`error: ${error}`);
    }
  }

  async update(id: number, update: UpdateType, fields: SelectedFields) {
    try {
      const sample = await this.delegate.findMany({ take: 1 });
      if (!sample || sample.length === 0) {
        throw new BadRequestException(`Could not find ${this.modelName}`);
      }
      const firstRecord = sample[0] as Record<string, any>;

      const hasDeletedAt = 'deletedAt' in firstRecord;
      const hasDeletedById = 'deletedById' in firstRecord;
      // const hasUpdatedById = 'updatedById' in firstRecord;

      const where: Record<string, any> = { id };
      if (hasDeletedAt) where.deletedAt = null;
      if (hasDeletedById) where.deletedById = null;

      const isexist = await this.delegate.findUnique({
        where,
        select: fields,
      });

      if (!isexist) {
        throw new BadRequestException(
          `Could not find ${this.modelName} with id ${id}`,
        );
      }

      const processedUpdate = await this.processPasswordFields(
        update as Record<string, unknown>,
      );

      const item = await this.delegate.update({
        where: { id },
        data: processedUpdate,
        select: fields,
      });

      if (!item) {
        throw new BadRequestException(
          `Could not update ${this.modelName} with id ${id}`,
        );
      }
      return item;
    } catch (error) {
      throw new BadRequestException(`error: ${error}`);
    }
  }

  async delete(id: number, userid: number, fields: SelectedFields) {
    try {
      const sample = await this.delegate.findMany({ take: 1 });
      if (!sample || sample.length === 0) {
        throw new BadRequestException(`Could not find ${this.modelName}`);
      }
      const firstRecord = sample[0] as Record<string, any>;

      const hasDeletedAt = 'deletedAt' in firstRecord;
      const hasDeletedById = 'deletedById' in firstRecord;

      const where: Record<string, any> = { id };
      if (hasDeletedAt) where.deletedAt = null;
      if (hasDeletedById) where.deletedById = null;
      const isexist = await this.delegate.findUnique({
        where,
        select: fields,
      });

      if (!isexist) {
        throw new BadRequestException(
          `Could not find ${this.modelName} with id ${id}`,
        );
      }

      // Prepare update data based on available columns
      const updateData: Record<string, any> = {};
      if (hasDeletedAt) updateData.deletedAt = new Date();
      if (hasDeletedById) updateData.deletedById = userid;

      const item = await this.delegate.update({
        where: { id },
        data: updateData,
        select: fields,
      });

      if (!item) {
        throw new BadRequestException(
          `Could not delete ${this.modelName} with id ${id}`,
        );
      }
      return item;
    } catch (error) {
      throw new BadRequestException(`error: ${error}`);
    }
  }

  async getPaginated(
    searchPaginationInput: SearchPaginationInput,
    whereSearchInput: WhereSearchInput,
    fields: SelectedFields,
  ) {
    try {
      const sample = await this.delegate.findMany({ take: 1 });
      if (!sample || sample.length === 0) {
        return {
          data: [],
          total: 0,
          skip: searchPaginationInput.skip,
          take: searchPaginationInput.take,
        } as unknown as PaginationType;
      }
      const firstRecord = sample[0] as Record<string, any>;

      const hasDeletedAt = 'deletedAt' in firstRecord;
      const hasDeletedById = 'deletedById' in firstRecord;
      const hasName = 'name' in firstRecord;

      const where: Record<string, any> = {};
      if (hasDeletedAt) where.deletedAt = null;
      if (hasDeletedById) where.deletedById = null;
      if (searchPaginationInput.search) {
        if (hasName) {
          where.name = {
            contains: searchPaginationInput.search,
          };
        }
      }

      // Process nested whereSearchInput
      const nestedWhere = this.processWhereSearchInput(whereSearchInput);
      Object.assign(where, nestedWhere);

      const [data, total] = await Promise.all([
        this.delegate.findMany({
          skip: searchPaginationInput.skip,
          take: searchPaginationInput.take,
          where,
          select:
            'data' in fields &&
            typeof fields.data === 'object' &&
            fields.data !== null &&
            'select' in fields.data
              ? (fields.data as { select: SelectedFields }).select
              : fields,
        }),
        this.delegate.count({
          where,
        }),
      ]);

      return {
        data,
        total,
        skip: searchPaginationInput.skip,
        take: searchPaginationInput.take,
      } as unknown as PaginationType;
    } catch (error) {
      throw new BadRequestException(`error: ${error}`);
    }
  }

  private processWhereSearchInput(
    whereSearchInput: WhereSearchInput,
  ): Record<string, unknown> {
    const where: Record<string, unknown> = {};

    if (whereSearchInput) {
      Object.keys(whereSearchInput as Record<string, unknown>).forEach(
        (key) => {
          const value = (whereSearchInput as Record<string, unknown>)[key];
          if (value !== undefined && value !== null) {
            // Handle nested objects (like product, subcategory, etc.)
            if (
              typeof value === 'object' &&
              !Array.isArray(value) &&
              !(value instanceof Date)
            ) {
              where[key] = this.processWhereSearchInput(
                value as WhereSearchInput,
              );
            } else {
              where[key] = value;
            }
          }
        },
      );
    }

    return where;
  }

  private async processPasswordFields(
    input: Record<string, unknown>,
  ): Promise<Record<string, unknown>> {
    const processedInput: Record<string, unknown> = { ...input };

    const passwordValue = processedInput.password;
    if (typeof passwordValue === 'string') {
      // Check if password is already hashed (argon2 hashes start with $argon2)
      if (!passwordValue.startsWith('$argon2')) {
        const hashed = await argon2.hash(passwordValue);
        processedInput.password = hashed;
      }
    }

    return processedInput;
  }
}
