import { ICreateCatalogServicesDTO } from "../dto/ICatalogServicesDTO";
import { CatalogServices } from "../infra/typeorm/entities/CatalogServices";

interface IFilterPesquisa {
  description?: string;
  id?: string;
}

interface ICatalogServicesRepository {
  create(data: ICreateCatalogServicesDTO): Promise<void>;
  delete(id: string): Promise<void>;
  findByIds(catalog_services_id: string[]): Promise<CatalogServices[]>;
  list(data: IFilterPesquisa): Promise<CatalogServices[]>;
}

export { ICatalogServicesRepository, IFilterPesquisa };
