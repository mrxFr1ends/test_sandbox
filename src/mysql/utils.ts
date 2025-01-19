import type {MysqlConfig} from '~/mysql/types';
import {getNumberRequireEnv, getStringRequireEnv} from '~/utils/env';

export const mysqlConfig: MysqlConfig = {
  user: getStringRequireEnv('MYSQL_USERNAME'),
  password: getStringRequireEnv('MYSQL_PASSWORD'),
  host: getStringRequireEnv('MYSQL_HOST'),
  port: getNumberRequireEnv('MYSQL_PORT'),
};
