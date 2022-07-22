"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Option 1: Passing a connection URI
// const sequelize = new Sequelize('postgres://danyparc:admin@example.com:5432/postgres') // Example for postgres
var sequelize = new _sequelize.default('messages', 'danyparc', 'admin', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});
exports.sequelize = sequelize;