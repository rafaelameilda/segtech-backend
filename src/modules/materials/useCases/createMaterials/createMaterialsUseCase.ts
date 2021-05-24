import { inject, injectable } from "tsyringe";

import { ICreateMaterialDTO } from "../../dto/ICreateMaterialDTO";
import { IMaterialsRepository } from "../../repositories/IMaterialsRepository";

@injectable()
class CreateMaterialsUseCase {
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
  }: ICreateMaterialDTO): Promise<void> {
    await this.materialsRepository.create({
      brand,
      description,
      material_custo,
      material_price,
      profit_margin,
      unity,
    });
  }
}

export { CreateMaterialsUseCase };
