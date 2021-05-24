import { getRepository, Repository } from "typeorm";

import { ICreateMaterialDTO } from "../../../dto/ICreateMaterialDTO";
import {
  IListMaterials,
  IMaterialsRepository,
  IMaterialsRetorno,
} from "../../../repositories/IMaterialsRepository";
import { Materials } from "../entities/Materials";

class MaterialsRepository implements IMaterialsRepository {
  private repository: Repository<Materials>;

  constructor() {
    this.repository = getRepository(Materials);
  }

  async create({
    brand,
    description,
    material_custo,
    material_price,
    profit_margin,
    unity,
    id,
  }: ICreateMaterialDTO): Promise<void> {
    const material = this.repository.create({
      description,
      id,
      material_custo,
      material_price,
      brand,
      profit_margin,
      unity,
    });

    await this.repository.save(material);
  }

  async findByIds(materials_id: string[]): Promise<Materials[]> {
    const materials = await this.repository.findByIds(materials_id);

    return materials;
  }

  async list({
    take,
    page,
    brand,
    description,
    unity,
    id,
  }: IListMaterials): Promise<IMaterialsRetorno> {
    const materialsQuery = this.repository
      .createQueryBuilder("m")
      .where("1=1")
      .take(take)
      .skip(page * take);

    if (brand) {
      materialsQuery.andWhere("UPPER(m.brand) LIKE UPPER('%'||:brand||'%' )", {
        brand,
      });
    }

    if (description) {
      materialsQuery.andWhere(
        "UPPER(m.description) LIKE UPPER('%'||:description||'%' )",
        {
          description,
        }
      );
    }

    if (unity) {
      materialsQuery.andWhere("UPPER(m.unity) LIKE UPPER('%'||:unity||'%' )", {
        unity,
      });
    }

    if (id) {
      materialsQuery.andWhere("m.id = :id", { id });
    }

    materialsQuery.orderBy({ id: "ASC" });

    const [materials, total] = await materialsQuery.getManyAndCount();

    const totalPages = Math.ceil(total / take);

    return {
      materials,
      pagination: { take, page: page === 0 ? 1 : page, total, totalPages },
    };
  }

  async delete(material_id: string): Promise<void> {
    await this.repository.delete(material_id);
  }
}

export { MaterialsRepository };
