type Environments = 'DEVELOPMENT' | 'PRODUCTION' | 'DOCKER';

interface ServerConfiguration {
  port: number;
  env: Environments;
}

interface DatabaseConfiguration {
  host: string;
  port: number;
  user: string;
  password: string;
  database_name: string;
}

interface JwtConfiguration {
  secret: string;
}

interface Configuration {
  server: ServerConfiguration;
  database: DatabaseConfiguration;
  jwt: JwtConfiguration;
}

export default (): Configuration => ({
  server: {
    port: +process.env.SERVER_PORT || 3000,
    env: (process.env.SERVER_ENV as Environments) || 'DEVELOPMENT',
  },
  database: {
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT || 5432,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database_name: process.env.DATABASE_NAME,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
});
