import { inject, injectable } from "tsyringe";

import { IAppointmentsRepository } from "@modules/appointments/repositories/IAppointmentsRepository";
import { ICatalogServicesRepository } from "@modules/catalogServices/repositories/ICatalogServicesRepositories";
import { IMaterialsRepository } from "@modules/materials/repositories/IMaterialsRepository";

interface IRequest {
  customer_id: string;
  date: Date;
  order_or_service_id: string;
  catalog_services_id: string[];
  materials_id: string[];
}

@injectable()
class CreateAppointmentsUseCase {
  constructor(
    @inject("AppointmentsRepository")
    private appointmentsRepository: IAppointmentsRepository,
    @inject("CatalogServicesRepository")
    private catalogServicesRepository: ICatalogServicesRepository,
    @inject("MaterialsRepository")
    private materialsRepository: IMaterialsRepository
  ) {}

  async execute({
    customer_id,
    date,
    order_or_service_id,
    catalog_services_id,
    materials_id,
  }: IRequest): Promise<void> {
    const catalog_services = await this.catalogServicesRepository.findByIds(
      catalog_services_id
    );

    const materials = await this.materialsRepository.findByIds(materials_id);

    await this.appointmentsRepository.create({
      customer_id,
      date,
      order_or_service_id,
      catalog_services,
      materials,
    });
  }
}

export { CreateAppointmentsUseCase };
