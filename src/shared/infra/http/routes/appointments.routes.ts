import { Router } from "express";

import { CreateAppointmentsController } from "@modules/appointments/useCases/createAppointments/CreateAppointmentsController";
import { ListAllAppointmentsController } from "@modules/appointments/useCases/listAllAppointments/ListAllAppointmentsController";

const appointmentsRoutes = Router();

const createAppointmentsController = new CreateAppointmentsController();
const listAllAppointmentsController = new ListAllAppointmentsController();

appointmentsRoutes.post("/", createAppointmentsController.handle);
appointmentsRoutes.get("/", listAllAppointmentsController.handle);

export { appointmentsRoutes };
