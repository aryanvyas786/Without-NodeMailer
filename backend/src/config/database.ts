import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('project2', 'root', 'Password123#@!', {
  host: 'localhost',
  dialect: 'mysql',
});
