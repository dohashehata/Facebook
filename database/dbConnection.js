import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('b2l4w8bapktrx6xyghkv', 'umdypdm0emxn71ns', '1pMGTlG316xurrlQRPy1', {
  host: 'b2l4w8bapktrx6xyghkv-mysql.services.clever-cloud.com',
  dialect: 'mysql'
});

sequelize.authenticate().then(() => {
  console.log('Database connected.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

export default sequelize;
