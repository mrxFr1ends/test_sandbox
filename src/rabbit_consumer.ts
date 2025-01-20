import 'dotenv/config';
import type {ConsumeMessage} from 'amqplib';
import {RabbitMq} from '~/rabbitmq';
import {amqpConfig} from '~/rabbitmq/utils';

const main = async (): Promise<void> => {
  await RabbitMq.connect(amqpConfig);
  await RabbitMq.channel.consume(
    'test_queue',
    (message: Readonly<ConsumeMessage | null>) => {
      if (!message) {
        console.error(`Invalid incoming message`);
        return;
      }
      console.log(`Received: ${JSON.stringify(message)}`);
      console.log(message.content.toString());
      RabbitMq.channel.ack(message);
    },
    {noAck: false},
  );
};

main();
