const getRequireEnv = <T extends Types>(
  key: string,
  type: PrimitiveType<T>,
): T => {
  const value = process.env[key];
  if (value === undefined) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  switch (type) {
    case 'string':
      // ��� T � type �������, T = string, � type = 'string' ������.
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      return value as T;
    case 'number': {
      const number = +value;
      if (isNaN(number)) {
        throw new Error(
          `Environment variable ${key} with type '${type}' must be a valid number`,
        );
      }
      // ��� T � type �������, T = number, � type = 'number' ������.
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      return number as T;
    }
    case 'boolean': {
      if (!['true', 'false'].includes(value)) {
        throw new Error(
          `Environment variable ${key} with type '${type}' must be a boolean ('true' or 'false')`,
        );
      }
      // ��� T � type �������, T = boolean, � type = 'boolean' ������.
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      return (value === 'true') as T;
    }
    default:
      throw new Error(
        `Unsupported type for environment variable ${key}: ${type}`,
      );
  }
};

export const getStringRequireEnv = (key: string): string => {
  return getRequireEnv<string>(key, 'string');
};

export const getNumberRequireEnv = (key: string): number => {
  return getRequireEnv<number>(key, 'number');
};

export const getBooleanRequireEnv = (key: string): boolean => {
  return getRequireEnv<boolean>(key, 'boolean');
};

type Types = string | number | boolean;

type PrimitiveType<T> = T extends string
  ? 'string'
  : T extends number
    ? 'number'
    : T extends boolean
      ? 'boolean'
      : never;
