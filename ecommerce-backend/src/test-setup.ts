import { createConnection, getConnectionOptions } from 'typeorm';

const setupTestDB = async () => {
  const connectionOptions = await getConnectionOptions();
  Object.assign(connectionOptions, {
    name: 'default',
    type: 'sqlite',
    database: ':memory:',
    synchronize: true,
    dropSchema: true,
  });
  await createConnection(connectionOptions);
};

export default setupTestDB;
