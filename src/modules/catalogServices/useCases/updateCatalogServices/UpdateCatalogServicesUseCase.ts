import { inject, injectable } from "tsyringe";

import { ICreateCatalogServicesDTO } from "@modules/catalogServices/dto/ICatalogServicesDTO";
import { ICatalogServicesRepository } from "@modules/catalogServices/repositories/ICatalogServicesRepositories";
import { AppError } from "@shared/errors/AppError";

@injectable()
class UpdateCatalogServicesUseCase {
  constructor(
    @inject("CatalogServicesRepository")
    private catalogServicesRepository: ICatalogServicesRepository
  ) {}

  async execute({
    price,
    description,
    unity_type,
    id,
  }: ICreateCatalogServicesDTO): Promise<void> {
    let catalogServiceExists;
    if (id) {
      catalogServiceExists = await this.catalogServicesRepository.findByIds([
        id,
      ]);
      if (!catalogServiceExists) {
        throw new AppError("Service does not exists!");
      }
    }

    await this.catalogServicesRepository.create({
      description,
      unity_type,
      price,
      id,
    });
  }
}

export { UpdateCatalogServicesUseCase };
