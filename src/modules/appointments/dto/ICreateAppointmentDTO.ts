import { CatalogServices } from "@modules/catalogServices/infra/typeorm/entities/CatalogServices";
import { Materials } from "@modules/materials/infra/typeorm/entities/Materials";

interface ICreateAppointmentDTO {
  date: Date;
  customer_id?: string;
  order_or_service_id: string;
  id?: string;
  catalog_services?: CatalogServices[];
  materials?: Materials[];
}

export { ICreateAppointmentDTO };
