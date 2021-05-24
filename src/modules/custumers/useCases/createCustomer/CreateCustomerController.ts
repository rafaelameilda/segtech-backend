import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCustomerUseCase } from "./CreateCustomerUseCase";

class CreateCustomerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const customerUseCase = container.resolve(CreateCustomerUseCase);

    await customerUseCase.execute(data);

    return response.status(201).send();
  }
}

export { CreateCustomerController };
