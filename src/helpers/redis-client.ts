import { Redis } from 'ioredis';

const options = {
    host: 'localhost', // Redis server hostname (default: 'localhost')
    port: 6378,        // Redis server port (default: 6379)
  };
export const client = new Redis(options)