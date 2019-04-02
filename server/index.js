import express from 'express';
import bodyParser from 'body-parser';
import routerV1 from './routes/v1';
import DatabaseInstance from './databaseSetup';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());

// initiallize the mongo database
const instance = new DatabaseInstance();

// load all routes
routerV1(app);

app.use('/', (req, res) => {
  res.send({
    message: 'SMS management API by Gabriel Micah - Software developer'
  });
});

const server = app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});

// If the database is not active we close it.
process.on('unhandledRejection', (err) => {
  if (err) console.error(err);
  server.close();
  process.exit(1);
});
