import { getRepository, Repository } from "typeorm";

import { ICreateCatalogServicesDTO } from "@modules/catalogServices/dto/ICatalogServicesDTO";
import {
  ICatalogServicesRepository,
  IFilterPesquisa,
} from "@modules/catalogServices/repositories/ICatalogServicesRepositories";

import { CatalogServices } from "../entities/CatalogServices";

class CatalogServicesRepository implements ICatalogServicesRepository {
  private repository: Repository<CatalogServices>;

  constructor() {
    this.repository = getRepository(CatalogServices);
  }

  async create({
    description,
    price,
    unity_type,
    id,
  }: ICreateCatalogServicesDTO): Promise<void> {
    const catalogService = this.repository.create({
      description,
      id,
      price,
      unity_type,
    });

    await this.repository.save(catalogService);
  }

  async findByIds(catalog_services_id: string[]): Promise<CatalogServices[]> {
    const catalogServices = await this.repository.findByIds(
      catalog_services_id
    );

    return catalogServices;
  }

  async list({ description, id }: IFilterPesquisa): Promise<CatalogServices[]> {
    const catalogServicesQuery = this.repository
      .createQueryBuilder("c")
      .where("1=1");

    if (description) {
      catalogServicesQuery.andWhere(
        "UPPER(c.description) LIKE UPPER('%'||:description||'%')",
        { description }
      );
    }

    if (id) {
      catalogServicesQuery.andWhere("c.id = :id", { id });
    }

    const catalogServices = await catalogServicesQuery.getMany();

    return catalogServices;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
export { CatalogServicesRepository };
