import type {RedisClientOptions} from 'redis';
import {getNumberRequireEnv, getStringRequireEnv} from '~/utils/env';

const MAX_RETRIES_TO_CONNECT = 3;
const DELAY_TO_RECONNECT_IN_MILLISECONDS = 500;

const reconnectStrategy = (retries: number): number | Error => {
  if (retries > MAX_RETRIES_TO_CONNECT) {
    return new Error('Failed to connect to Redis');
  }
  return DELAY_TO_RECONNECT_IN_MILLISECONDS;
};

export const redisConfig: RedisClientOptions = {
  username: getStringRequireEnv('REDIS_USERNAME'),
  password: getStringRequireEnv('REDIS_PASSWORD'),
  socket: {
    host: getStringRequireEnv('REDIS_HOST'),
    port: getNumberRequireEnv('REDIS_PORT'),
    reconnectStrategy,
  },
};
