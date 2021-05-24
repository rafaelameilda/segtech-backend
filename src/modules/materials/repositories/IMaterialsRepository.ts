import { ICreateMaterialDTO } from "../dto/ICreateMaterialDTO";
import { Materials } from "../infra/typeorm/entities/Materials";

interface IListMaterials {
  take: number;
  page: number;
  description?: string;
  unity?: string;
  brand?: string;
  id?: string;
}

interface IPagination {
  take: number;
  page: number;
  total: number;
  totalPages: number;
}

interface IMaterialsRetorno {
  materials: Materials[];
  pagination: IPagination;
}

interface IMaterialsRepository {
  create(data: ICreateMaterialDTO): Promise<void>;
  findByIds(materials_id: string[]): Promise<Materials[]>;
  list(data: IListMaterials): Promise<IMaterialsRetorno>;
  delete(material_id: string): Promise<void>;
}

export { IMaterialsRepository, IListMaterials, IMaterialsRetorno };
