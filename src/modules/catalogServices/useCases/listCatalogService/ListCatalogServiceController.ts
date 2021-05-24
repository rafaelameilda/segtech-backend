import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCatalogServicesUseCase } from "./ListCatalogServicesUseCase";

class ListCatalogServicesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { description } = request.query;
    const { id } = request.params;

    const listCatalogServicesUseCase = container.resolve(
      ListCatalogServicesUseCase
    );

    const catalogServices = await listCatalogServicesUseCase.execute({
      description: description ? String(description) : undefined,
      id: id ? String(id) : undefined,
    });

    return response.json({ catalogServices });
  }
}

export { ListCatalogServicesController };
