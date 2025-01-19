import 'dotenv/config';
import {amqpConfig} from '~/rabbitmq/utils';
import mysql from 'mysql2/promise';
import {mysqlConfig} from '~/mysql/utils';
import {RabbitMq} from '~/rabbitmq';
import {createClient} from 'redis';

const main = async (): Promise<void> => {
  await RabbitMq.connect(amqpConfig);
  await RabbitMq.channel.assertQueue('test_second_queue');

  await RabbitMq.channel.bindQueue(
    'test_second_queue',
    'test_exchange',
    'test_route',
  );

  // RabbitMq.channel.sendToQueue('test_queue', Buffer.from('Hello World!'));
  RabbitMq.channel.publish(
    'test_exchange',
    'test_route',
    Buffer.from('Hello World!'),
  );
  await RabbitMq.close();

  const mysqlConnection = await mysql.createConnection(mysqlConfig);

  await mysqlConnection.ping();
  const [rows] = await mysqlConnection.execute(
    'select Code, Name from world.country;',
  );

  console.log(rows);

  await mysqlConnection.end();

  const redisConnection = await createClient({url: 'redis://localhost:6379'})
    .on('error', (err) => console.log('Redis Client Error', err))
    .connect();
  await redisConnection.set('test2', 'test1234');
  await redisConnection.expire('test2', 60);
  const value = await redisConnection.get('test1');
  console.log(value);

  const results = await redisConnection
    .multi()
    .set('key', 'value')
    .expire('key', 60)
    .get('test2')
    .exec();
  console.log(results);

  await redisConnection.disconnect();
};

main();
