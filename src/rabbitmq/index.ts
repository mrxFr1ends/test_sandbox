import client, {type Connection, type Channel, type Options} from 'amqplib';

export class RabbitMqConnection {
  private static instance: RabbitMqConnection | undefined;
  protected _channel: Channel | null = null;
  protected connection: Connection | null = null;

  private constructor() {}

  public get channel(): Channel {
    if (this._channel === null) {
      throw new Error('Channel is not initialized');
    }
    return this._channel;
  }

  public static getInstance(): RabbitMqConnection {
    return this.instance ?? (this.instance = new this());
  }

  public async connect(amqpConfig: Readonly<Options.Connect>): Promise<void> {
    this.connection = await client.connect(amqpConfig);
    this._channel = await this.connection.createChannel();
  }

  public async close(): Promise<void> {
    await this._channel?.close();
    await this.connection?.close();
  }
}

export const RabbitMq = RabbitMqConnection.getInstance();
