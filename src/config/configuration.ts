export default () => ({
  port: parseInt(process.env.PORT || '9876', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  database: {
    url: process.env.DATABASE_URL,
  },
  cors: {
    origins: process.env.ALLOWED_ORIGINS?.split(',') || [
      'http://localhost:9876',
    ],
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRATION || '7d',
    refreshSecret: process.env.JWT_REFRESH_SECRET,
    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRATION || '30d',
  },
  sms: {
    apiKey: process.env.SMS_API_KEY,
    sender: process.env.SMS_SENDER,
    peId: process.env.SMS_PE_ID,
    tempId: process.env.SMS_TEMP_ID,
  },
});
