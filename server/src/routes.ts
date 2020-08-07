import express from 'express';
import TeachingController from './controlers/TeachingController';
import ConnectionsController from './controlers/ConnectionsController';

const routes = express.Router();
const teachingController = new TeachingController();
const connectionsController = new ConnectionsController();

routes.get('/teach', teachingController.index);
routes.post('/teach', teachingController.create);

routes.get('/connect', connectionsController.index);
routes.post('/connect', connectionsController.create);

export default routes;