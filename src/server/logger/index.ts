import { format, transports, createLogger } from 'winston';
import { SignaleTransport } from './transports.js';

const { NODE_ENV } = process.env;
const LOG_LEVEL = process.env.LOG_LEVEL || 'info';

const transportOpts = {
  level: LOG_LEVEL,
};

export const logger = createLogger({
  level: LOG_LEVEL,
  format: format.json(),
});

if (NODE_ENV === 'production') {
  logger.add(new transports.Console(transportOpts));
} else {
  logger.add(new SignaleTransport(transportOpts));
}
