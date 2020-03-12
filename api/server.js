const express = require('express');

const Hubs = require('../hubs/hubs-model.js');

const server = express()

const hubsRouter = require('../hubs/hubsRouter.js');

server.use(express.json());

server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome to the Lambda Hubs API</p>
  `);
}); 




//router will handle end point '/api/hubs'

server.use('/api/hubs', hubsRouter)





module.exports = server;