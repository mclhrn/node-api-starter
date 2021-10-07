import pino from 'pino'
export const l = pino({
  name: process.env.APP_ID || 'Images Server',
  level: process.env.LOG_LEVEL || 'info',
  prettyPrint: true
})
