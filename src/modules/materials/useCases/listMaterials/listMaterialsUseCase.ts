import { inject, injectable } from "tsyringe";

import {
  IMaterialsRepository,
  IListMaterials,
  IMaterialsRetorno,
} from "@modules/materials/repositories/IMaterialsRepository";

@injectable()
class ListMaterialsUseCase {
  constructor(
    @inject("MaterialsRepository")
    private materialsRepository: IMaterialsRepository
  ) {}

  async execute({
    description,
    unity,
    brand,
    take,
    page,
    id,
  }: IListMaterials): Promise<IMaterialsRetorno> {
    const newPage = page === 1 ? 0 : page - 1;
    const materials = await this.materialsRepository.list({
      description,
      unity,
      brand,
      take,
      page: newPage,
      id,
    });

    return materials;
  }
}

export { ListMaterialsUseCase };
