import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListMaterialsUseCase } from "./listMaterialsUseCase";

class ListMaterialsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { description, unity, brand, take, page } = request.query as any;

    const { id } = request.params;

    const listMaterialsUseCase = container.resolve(ListMaterialsUseCase);

    const materials = await listMaterialsUseCase.execute({
      description,
      unity,
      brand,
      page: page ? Number(page) : 1,
      take: take ? Number(take) : 1,
      id,
    });

    return response.json(materials);
  }
}

export { ListMaterialsController };
