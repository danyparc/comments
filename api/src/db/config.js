import 'dotenv/config'
import Sequelize from "sequelize"


const envars = {
  DB_DATABASE: process.env.DB_DATABASE,
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
  DB_HOST: process.env.DB_HOST,
};

console.log(envars);

export const sequelize = new Sequelize(envars.DB_DATABASE, envars.DB_USER, envars.DB_PASS, {
  host: envars.DB_HOST,
  dialect: 'postgres',
  logging: false,
});


