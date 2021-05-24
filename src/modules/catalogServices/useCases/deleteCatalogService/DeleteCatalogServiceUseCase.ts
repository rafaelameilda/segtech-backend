import { inject, injectable } from "tsyringe";

import { ICatalogServicesRepository } from "@modules/catalogServices/repositories/ICatalogServicesRepositories";

@injectable()
class DeleteCatalogServiceUseCase {
  constructor(
    @inject("CatalogServicesRepository")
    private catalogServicesRepository: ICatalogServicesRepository
  ) {}

  async execute(id: string): Promise<void> {
    await this.catalogServicesRepository.delete(id);
  }
}

export { DeleteCatalogServiceUseCase };
