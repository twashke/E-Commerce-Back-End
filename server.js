//  Declare Dependencies
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection')

// Declare Variable for Express Function
const app = express();
// Declare PORT
const PORT = process.env.PORT || 3001;

// Data Parsing using Express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Turn on all routes
app.use(routes);

// Turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`)
  });
});
