const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
// const sequelize = new Sequelize('postgres://danyparc:admin@example.com:5432/postgres') // Example for postgres
const sequelize = new Sequelize('messages', 'danyparc', 'admin', {
  host: 'localhost',
  dialect: 'postgres'
});
async function connect(){
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

connect()

module.exports = sequelize