export default ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'mysql'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'test'),
      user: env('DATABASE_USERNAME', 'test'),
      password: env('DATABASE_PASSWORD', 'test'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
