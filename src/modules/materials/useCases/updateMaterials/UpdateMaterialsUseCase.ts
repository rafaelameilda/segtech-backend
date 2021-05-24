import { inject, injectable } from "tsyringe";

import { ICreateMaterialDTO } from "@modules/materials/dto/ICreateMaterialDTO";
import { IMaterialsRepository } from "@modules/materials/repositories/IMaterialsRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class UpdateMaterialsUseCase {
  constructor(
    @inject("MaterialsRepository")
    private materialsRepository: IMaterialsRepository
  ) {}

  async execute({
    brand,
    description,
    material_custo,
    material_price,
    profit_margin,
    unity,
    id,
  }: ICreateMaterialDTO): Promise<void> {
    let materialExists;
    if (id) {
      materialExists = await this.materialsRepository.findByIds([id]);
      if (!materialExists) {
        throw new AppError("Material does not exists!");
      }
    }

    await this.materialsRepository.create({
      brand,
      description,
      material_custo,
      material_price,
      profit_margin,
      unity,
      id,
    });
  }
}

export { UpdateMaterialsUseCase };
