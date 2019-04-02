import ContactRoutes from './contact';
import SmsRoutes from './sms';

const API_PREFIX = '/api/v1/';

const routes = (app) => {
  app.use(API_PREFIX, ContactRoutes);
  app.use(API_PREFIX, SmsRoutes);
};

export default routes;
