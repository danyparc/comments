import Sequelize from 'sequelize'
import { sequelize } from './config'

export const Comment = sequelize.define('comments', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  email: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
}, {
  timestamps: true
})

Comment.sync({force: false})
  .then(()=> console.log('DB: comments table synced'))
  .catch((error)=>console.error('Failed to sync comments table'))