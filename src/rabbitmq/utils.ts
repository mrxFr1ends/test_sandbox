import type {AmqpConfig} from '~/rabbitmq/types';
import {getNumberRequireEnv, getStringRequireEnv} from '~/utils/env';

export const amqpConfig: AmqpConfig = {
  user: getStringRequireEnv('RABBITMQ_USERNAME'),
  password: getStringRequireEnv('RABBITMQ_PASSWORD'),
  host: getStringRequireEnv('RABBITMQ_HOST'),
  port: getNumberRequireEnv('RABBITMQ_PORT'),
};

export const getAmqpUrl = (config: Readonly<AmqpConfig>): string => {
  return `amqp://${config.user}:${config.password}@${config.host}:${config.port}`;
};
