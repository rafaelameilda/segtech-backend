import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateCatalogServicesUseCase } from "./UpdateCatalogServicesUseCase";

class UpdateCatalogServicesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { description, price, unity_type } = request.body;
    const { id } = request.params;

    const updateCatalogServicesUseCase = container.resolve(
      UpdateCatalogServicesUseCase
    );

    await updateCatalogServicesUseCase.execute({
      description,
      price,
      unity_type,
      id,
    });

    return response.status(201).send();
  }
}

export { UpdateCatalogServicesController };
