import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCustomersUseCase } from "./ListCustomersUseCase";

class ListCustomersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.query as any;
    const { id } = request.params;

    const listCustomersUseCase = container.resolve(ListCustomersUseCase);

    const customers = await listCustomersUseCase.execute({ name, email, id });

    return response.json(customers);
  }
}

export { ListCustomersController };
