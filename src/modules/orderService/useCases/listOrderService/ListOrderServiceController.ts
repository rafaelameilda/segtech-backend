import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListOrderServiceUseCase } from "./ListOrderServiceUseCase";

class ListOrderServiceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listOrderServiceUseCase = container.resolve(ListOrderServiceUseCase);

    const orderServices = await listOrderServiceUseCase.execute({
      order_id: id,
    });

    return response.json(orderServices);
  }
}

export { ListOrderServiceController };
