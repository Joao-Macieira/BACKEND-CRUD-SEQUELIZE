const Sequelize = require('sequelize');

const sequelize = new Sequelize('crud-orm', 'root', 'root', {
  dialect: 'mysql',
  host: '127.0.0.1'
});

sequelize.import('./people.js');

sequelize.sync().then(() => console.log('syncked'));
