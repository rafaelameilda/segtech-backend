import { CatalogServices } from "@modules/catalogServices/infra/typeorm/entities/CatalogServices";
import { Materials } from "@modules/materials/infra/typeorm/entities/Materials";

interface ICreateOrderServiceDTO {
  customer_id?: string;
  reference?: string;
  validity?: number;
  brand?: string;
  model?: string;
  discount?: number;
  type?: string;
  warranty?: string;
  date_visit?: Date;
  deadline?: Date;
  id?: string;
  catalog_services?: CatalogServices[];
  materials?: Materials[];
}

export { ICreateOrderServiceDTO };
