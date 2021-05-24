import { inject, injectable } from "tsyringe";

import { ICreateCostumerDTO } from "@modules/custumers/dto/ICreateCustumerDTO";
import { ICustomerRepository } from "@modules/custumers/repositories/ICustumerRepository";

@injectable()
class CreateCustomerUseCase {
  constructor(
    @inject("CustomerRepository")
    private customerRepository: ICustomerRepository
  ) {}

  async execute(data: ICreateCostumerDTO): Promise<void> {
    await this.customerRepository.create(data);
  }
}

export { CreateCustomerUseCase };
