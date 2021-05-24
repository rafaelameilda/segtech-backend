import { getRepository, Repository } from "typeorm";

import { ICreateOrderServiceDTO } from "@modules/orderService/dto/ICreateOrderServiceDTO";
import {
  IListOrderServiceRequest,
  IOrderServiceRepository,
} from "@modules/orderService/repositories/IOrderServiceRepository";

import { OrderService } from "../entities/OrderService";

class OrderServiceRepository implements IOrderServiceRepository {
  private repository: Repository<OrderService>;

  constructor() {
    this.repository = getRepository(OrderService);
  }

  async create({
    brand,
    customer_id,
    discount,
    model,
    reference,
    type,
    validity,
    warranty,
    id,
    deadline,
    date_visit,
    catalog_services,
    materials,
  }: ICreateOrderServiceDTO): Promise<OrderService> {
    const orderService = this.repository.create({
      brand,
      customer_id,
      discount,
      model,
      reference,
      type,
      validity,
      warranty,
      date_visit,
      catalog_services,
      materials,
      id,
      deadline,
    });

    await this.repository.save(orderService);

    return orderService;
  }

  async list({ order_id }: IListOrderServiceRequest): Promise<OrderService[]> {
    const orderServiceQuery = this.repository
      .createQueryBuilder("o")
      .leftJoinAndSelect("o.catalog_services", "catalog_services")
      .leftJoinAndSelect("o.materials", "materials")
      .where("1=1");

    if (order_id) {
      orderServiceQuery.andWhere("o.id = :id", { id: order_id });
    }

    orderServiceQuery.orderBy({ "o.id": "ASC" });

    const orderServices = await orderServiceQuery.getMany();

    return orderServices;
  }

  async findById(order_id: string): Promise<OrderService | undefined> {
    const orderService = await this.repository.findOne({
      where: { id: order_id },
    });

    return orderService;
  }
}

export { OrderServiceRepository };
