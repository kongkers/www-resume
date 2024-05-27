import Transport from 'winston-transport';
import signale from 'signale';

const { Signale } = ((signale as any).defaults ?? signale) as typeof signale;

const options = {
  types: {
    debug: { color: 'cyanBright', label: 'debug', badge: '*' },
    verbose: { color: 'gray', label: 'verbose', badge: '-' },
    silly: { color: 'gray', label: 'silly', badge: ' ' },
  },
};

const server = new Signale({
  scope: '-svr--',
  ...options,
});

interface Info {
  level: any,
  message: string;
}

export class SignaleTransport extends Transport {
  // eslint-disable-next-line class-methods-use-this
  log(info: Info, callback: () => void) {
    const { level, message } = info;
    server[level](message);
    callback();
  }
}
