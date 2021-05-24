import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateOrderServiceUseCase } from "./createOrderServiceUseCase";

class CreateOrderServiceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      brand,
      customer_id,
      date_visit,
      deadline,
      discount,
      model,
      reference,
      type,
      validity,
      warranty,
      catalog_services_id,
      materials_id,
    } = request.body;

    const createOrderServiceUseCase = container.resolve(
      CreateOrderServiceUseCase
    );

    const orderService = await createOrderServiceUseCase.execute({
      brand,
      customer_id,
      date_visit,
      deadline,
      discount,
      model,
      reference,
      type,
      validity,
      warranty,
      catalog_services_id,
      materials_id,
    });

    return response.status(201).send(orderService);
  }
}

export { CreateOrderServiceController };
