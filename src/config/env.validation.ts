import * as Joi from 'joi';

export const validationSchema = Joi.object({
  // Application
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test', 'staging')
    .default('development'),
  PORT: Joi.number().default(9997),

  // Database
  DATABASE_URL: Joi.string().required(),

  // JWT (optional for now, will be required when implementing auth)
  JWT_SECRET: Joi.string().optional(),
  JWT_EXPIRATION: Joi.string().default('7d'),
  JWT_REFRESH_SECRET: Joi.string().optional(),
  JWT_REFRESH_EXPIRATION: Joi.string().default('30d'),

  // SMS
  SMS_API_KEY: Joi.string().optional(),
  SMS_SENDER: Joi.string().optional(),
  SMS_PE_ID: Joi.string().optional(),
  SMS_TEMP_ID: Joi.string().optional(),
});
