import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteCatalogServiceUseCase } from "./DeleteCatalogServiceUseCase";

class DeleteCatalogServiceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteCatalogServiceUseCase = container.resolve(
      DeleteCatalogServiceUseCase
    );

    await deleteCatalogServiceUseCase.execute(id);

    return response.status(200).send();
  }
}

export { DeleteCatalogServiceController };
