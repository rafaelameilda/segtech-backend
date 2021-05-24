import { inject, injectable } from "tsyringe";

import { ICatalogServicesDTO } from "@modules/catalogServices/dto/ICatalogServicesDTO";
import { ICatalogServicesRepository } from "@modules/catalogServices/repositories/ICatalogServicesRepositories";

@injectable()
class CatalogServicesUseCase {
  constructor(
    @inject("CatalogServicesRepository")
    private catalogServicesRepository: ICatalogServicesRepository
  ) {}

  async execute({
    description,
    price,
    unity_type,
    id,
  }: ICatalogServicesDTO): Promise<void> {
    await this.catalogServicesRepository.create({
      description,
      id,
      price,
      unity_type,
    });
  }
}

export { CatalogServicesUseCase };
