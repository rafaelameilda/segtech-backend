import { inject, injectable } from "tsyringe";

import { ICreateOrderServiceDTO } from "@modules/orderService/dto/ICreateOrderServiceDTO";
import { IOrderServiceRepository } from "@modules/orderService/repositories/IOrderServiceRepository";

@injectable()
class UpdateOrderServiceUseCase {
  constructor(
    @inject("OrderServiceRepository")
    private orderServiceRepository: IOrderServiceRepository
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
    id,
  }: ICreateOrderServiceDTO): Promise<void> {
    await this.orderServiceRepository.create({
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
      id,
    });
  }
}

export { UpdateOrderServiceUseCase };
