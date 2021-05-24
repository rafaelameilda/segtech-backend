import { inject, injectable } from "tsyringe";

import { IMaterialsRepository } from "@modules/materials/repositories/IMaterialsRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class DeleteMaterialUseCase {
  constructor(
    @inject("MaterialsRepository")
    private materialsRepository: IMaterialsRepository
  ) {}

  async execute(material_id: string): Promise<void> {
    const materialExists = await this.materialsRepository.findByIds([
      material_id,
    ]);

    if (!materialExists) {
      throw new AppError("Material does not exists!");
    }

    await this.materialsRepository.delete(material_id);
  }
}

export { DeleteMaterialUseCase };
