import { Router } from 'express';
import { uuid } from 'uuidv4';

const appointmentsRouter = Router();

const appointments = [];

appointmentsRouter.post('/', (request, response) => {
  return response.json({ message: 'Hello World '});
})

export default appointmentsRouter;
