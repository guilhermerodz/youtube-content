import { Router } from 'express';

import UserController from './controllers/UserController';
import SessionController from './controllers/SessionController';
import TestController from './controllers/TestController';

import authMiddleware from './middlewares/auth';
import roleMiddleware from './middlewares/role';

const routes = Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get('/authenticated', TestController.test);
routes.get('/admins', roleMiddleware('admin'), TestController.testAdmin);

export default routes;
