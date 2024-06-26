const Redis = require('ioredis');

const sentinelConfig = [
    {
      host: "localhost", // IP address of the first Sentinel node
      port: 26379,        // Default Sentinel port
    },
    {
      host: "localhost", // IP address of the second Sentinel node
      port: 26380,
    },
    {
      host: "localhost", // IP address of the third Sentinel node
      port: 26381,
    },
  ];

// Configuration for the Redis master
const redisConfig = {
  sentinels: sentinelConfig,
  name: 'mymaster', // Replace with your master name
};

// Create an ioredis client with Sentinel support
const redis = new Redis(redisConfig);

// Example: Perform a Redis operation
redis.set('myKey', 'Hello, Redis via Sentinel!')
  .then(() => {
    return redis.get('myKey');
  })
  .then((value) => {
    console.log('Value retrieved from Redis:', value);
  })
  .catch((error) => {
    console.error('Error:', error);
  })
  .finally(() => {
    // Close the Redis connection when done
    redis.quit();
  });

