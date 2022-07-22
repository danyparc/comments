import Sequelize from "sequelize"
// Option 1: Passing a connection URI
// const sequelize = new Sequelize('postgres://danyparc:admin@example.com:5432/postgres') // Example for postgres
export const sequelize = new Sequelize('messages', 'danyparc', 'admin', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});


