import type {Options} from 'amqplib';
import {getNumberRequireEnv, getStringRequireEnv} from '~/utils/env';

export const amqpConfig: Options.Connect = {
  username: getStringRequireEnv('RABBITMQ_USERNAME'),
  password: getStringRequireEnv('RABBITMQ_PASSWORD'),
  hostname: getStringRequireEnv('RABBITMQ_HOST'),
  port: getNumberRequireEnv('RABBITMQ_PORT'),
};
