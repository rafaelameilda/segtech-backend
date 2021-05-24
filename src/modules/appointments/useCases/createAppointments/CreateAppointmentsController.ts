import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateAppointmentsUseCase } from "./CreateAppointmentsUseCase";

class CreateAppointmentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      customer_id,
      date,
      order_or_service_id,
      catalog_services_id,
      materials_id,
    } = request.body;

    const createAppointmentUseCase = container.resolve(
      CreateAppointmentsUseCase
    );

    await createAppointmentUseCase.execute({
      customer_id,
      date,
      order_or_service_id,
      catalog_services_id,
      materials_id,
    });

    return response.status(201).send();
  }
}

export { CreateAppointmentsController };
