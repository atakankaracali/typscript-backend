import { getConnection } from 'typeorm';

const teardownTestDB = async () => {
  const connection = getConnection();
  if (connection.isConnected) {
    await connection.close();
  }
};

export default teardownTestDB;
