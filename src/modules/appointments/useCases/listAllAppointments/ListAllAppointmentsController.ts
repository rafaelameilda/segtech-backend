import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAllAppointmentsUseCase } from "./ListAllAppointmentsUseCase";

class ListAllAppointmentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllAppointmentsUseCase = container.resolve(
      ListAllAppointmentsUseCase
    );

    const all = await listAllAppointmentsUseCase.execute();

    return response.json(all);
  }
}

export { ListAllAppointmentsController };
