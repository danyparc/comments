"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Comment = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Comment = _config.sequelize.define('comments', {
  id: {
    type: _sequelize.default.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  email: {
    type: _sequelize.default.TEXT,
    allowNull: false
  },
  content: {
    type: _sequelize.default.TEXT,
    allowNull: false
  }
}, {
  timestamps: true
});

exports.Comment = Comment;
Comment.sync({
  force: false
}).then(function () {
  return console.log('DB: comments table synced');
}).catch(function (error) {
  return console.error('Failed to sync comments table');
});