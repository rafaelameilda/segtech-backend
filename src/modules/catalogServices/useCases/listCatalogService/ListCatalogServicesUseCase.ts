import { inject, injectable } from "tsyringe";

import { CatalogServices } from "@modules/catalogServices/infra/typeorm/entities/CatalogServices";
import {
  ICatalogServicesRepository,
  IFilterPesquisa,
} from "@modules/catalogServices/repositories/ICatalogServicesRepositories";

@injectable()
class ListCatalogServicesUseCase {
  constructor(
    @inject("CatalogServicesRepository")
    private catalogServicesRepository: ICatalogServicesRepository
  ) {}

  async execute({
    description,
    id,
  }: IFilterPesquisa): Promise<CatalogServices[]> {
    const catalogServices = await this.catalogServicesRepository.list({
      description,
      id,
    });

    return catalogServices;
  }
}

export { ListCatalogServicesUseCase };
