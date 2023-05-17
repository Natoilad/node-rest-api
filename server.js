const app = require('./app');
const mongoose = require('mongoose');
// const DB_HOST =
//   'mongodb+srv://test:Qwerty123@cluster0.dighgv3.mongodb.net/db-contacts?retryWrites=true&w=majority';

const { DB_HOST } = process.env;
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log('Database connection successful');
    });
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });
