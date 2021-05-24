import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteMaterialUseCase } from "./DeleteMaterialsUseCase";

class DeleteMaterialController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteMaterialUseCase = container.resolve(DeleteMaterialUseCase);

    await deleteMaterialUseCase.execute(id);

    return response.status(200).send();
  }
}

export { DeleteMaterialController };
