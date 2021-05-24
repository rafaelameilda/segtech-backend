import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateOrderServiceUseCase } from "./UpdateOrderServiceUseCase";

class UpdateOrderServiceController {
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
    } = request.body;
    const { id } = request.params;

    const updateOrderServiceUseCase = container.resolve(
      UpdateOrderServiceUseCase
    );

    await updateOrderServiceUseCase.execute({
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
      id,
    });

    return response.status(200).send();
  }
}

export { UpdateOrderServiceController };
