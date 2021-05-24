import { Request, Response } from "express";
import { container } from "tsyringe";

import { CatalogServicesUseCase } from "./CatalogServicesUseCase";

class CatalogServicesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { description, price, unity_type } = request.body;
    const { id } = request.query;

    const catalogServicesUseCase = container.resolve(CatalogServicesUseCase);

    await catalogServicesUseCase.execute({
      description,
      price,
      unity_type,
      id: id ? String(id) : undefined,
    });

    return response.status(201).send();
  }
}

export { CatalogServicesController };
