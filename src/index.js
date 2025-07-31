import { setupServer } from './server.js';
import { initMongoConnection } from './db/initMongoConnection.js';

const boottstrap = async () => {
  await initMongoConnection();
  setupServer();
};

boottstrap();
