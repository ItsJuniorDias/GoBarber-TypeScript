import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController';

const appointmentsRouter = Router();

appointmentsRouter.use(ensureAuthenticated);

const appointmentController = new AppointmentsController();

appointmentsRouter.post('/', appointmentController.create);

export default appointmentsRouter;
