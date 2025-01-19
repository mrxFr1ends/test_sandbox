import type {ConnectionOptions} from 'mysql2';
import {getNumberRequireEnv, getStringRequireEnv} from '~/utils/env';

export const mysqlConfig: ConnectionOptions = {
  user: getStringRequireEnv('MYSQL_USERNAME'),
  password: getStringRequireEnv('MYSQL_PASSWORD'),
  host: getStringRequireEnv('MYSQL_HOST'),
  port: getNumberRequireEnv('MYSQL_PORT'),
};
