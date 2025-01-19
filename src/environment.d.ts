declare global {
  namespace NodeJS {
    interface ProcessEnv {
      RABBITMQ_USERNAME: string | undefined;
      RABBITMQ_PASSWORD: string | undefined;
      RABBITMQ_HOST: string | undefined;
      RABBITMQ_PORT: string | undefined;
    }
  }
}

export {};
