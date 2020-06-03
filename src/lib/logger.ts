import pino from 'pino';

export const l = pino({
  name: process.env.APP_ID,
  level: process.env.LOG_LEVEL,
  prettyPrint: true
});
