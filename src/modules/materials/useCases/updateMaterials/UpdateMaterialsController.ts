import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateMaterialsUseCase } from "./UpdateMaterialsUseCase";

class UpdateMaterialController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      brand,
      description,
      material_custo,
      material_price,
      profit_margin,
      unity,
    } = request.body;
    const { id } = request.params;

    const updateMaterialsUseCase = container.resolve(UpdateMaterialsUseCase);

    await updateMaterialsUseCase.execute({
      brand,
      description,
      material_custo,
      material_price,
      profit_margin,
      unity,
      id,
    });

    return response.status(201).send();
  }
}

export { UpdateMaterialController };
