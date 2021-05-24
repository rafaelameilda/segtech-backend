import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

import { OrderService } from "../../infra/typeorm/entities/OrderService";
import {
  IOrderServiceRepository,
  IListOrderServiceRequest,
} from "../../repositories/IOrderServiceRepository";

@injectable()
class ListOrderServiceUseCase {
  constructor(
    @inject("OrderServiceRepository")
    private orderServiceRepository: IOrderServiceRepository
  ) {}

  async execute({
    order_id,
  }: IListOrderServiceRequest): Promise<OrderService[]> {
    if (order_id) {
      const orderExists = await this.orderServiceRepository.findById(order_id);

      if (!orderExists) {
        throw new AppError("Order of Service does not exists!");
      }
    }

    const orderService = await this.orderServiceRepository.list({ order_id });

    return orderService;
  }
}

export { ListOrderServiceUseCase };
