import { inject, injectable } from "tsyringe";

import { ICatalogServicesRepository } from "@modules/catalogServices/repositories/ICatalogServicesRepositories";
import { IMaterialsRepository } from "@modules/materials/repositories/IMaterialsRepository";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";

import { OrderService } from "../../infra/typeorm/entities/OrderService";
import { IOrderServiceRepository } from "../../repositories/IOrderServiceRepository";

interface IRequest {
  brand: string;
  customer_id: string;
  date_visit: Date;
  deadline: Date;
  discount: number;
  model: string;
  reference: string;
  type: string;
  validity: number;
  warranty: string;
  catalog_services_id: string[];
  materials_id: string[];
}

@injectable()
class CreateOrderServiceUseCase {
  constructor(
    @inject("OrderServiceRepository")
    private orderServiceRepository: IOrderServiceRepository,
    @inject("DayjsDateProvider")
    private dateProvider: IDateProvider,
    @inject("CatalogServicesRepository")
    private catalogServicesRepository: ICatalogServicesRepository,
    @inject("MaterialsRepository")
    private materialsRepository: IMaterialsRepository
  ) {}

  async execute({
    brand,
    customer_id,
    date_visit,
    deadline,
    discount,
    model,
    reference,
    type,
    validity,
    warranty,
    catalog_services_id,
    materials_id,
  }: IRequest): Promise<OrderService> {
    let new_date_visit;
    let new_deadline;
    if (date_visit) {
      new_date_visit = this.dateProvider.formatDateToBetweenPostGress(
        date_visit,
        false
      );
    }
    if (deadline) {
      new_deadline = this.dateProvider.formatDateToBetweenPostGress(
        deadline,
        false
      );
    }

    let catalog_services;

    if (catalog_services_id) {
      catalog_services = await this.catalogServicesRepository.findByIds(
        catalog_services_id
      );
    }

    let materials;

    if (materials_id) {
      materials = await this.materialsRepository.findByIds(materials_id);
    }

    const orderService = await this.orderServiceRepository.create({
      brand,
      customer_id,
      date_visit: new_date_visit,
      deadline: new_deadline,
      discount,
      model,
      reference,
      type,
      validity,
      warranty,
      catalog_services,
      materials,
    });

    return orderService;
  }
}

export { CreateOrderServiceUseCase };
