require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONT_END_URL,
    },
  },
  (d) => {
    console.log(`Server is running on port ${d.port}`);
  }
);
