import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateMaterialsUseCase } from "./createMaterialsUseCase";

class CreateMaterialsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      brand,
      description,
      material_custo,
      material_price,
      profit_margin,
      unity,
    } = request.body;
    const { id } = request.query;

    const createMaterialsUseCase = container.resolve(CreateMaterialsUseCase);

    await createMaterialsUseCase.execute({
      brand,
      description,
      material_custo,
      material_price,
      profit_margin,
      unity,
      id: String(id),
    });

    return response.status(201).send();
  }
}

export { CreateMaterialsController };
