import { inject, injectable } from "tsyringe";

import { Customer } from "@modules/custumers/infra/typeorm/entities/Customer";
import {
  ICustomerFilterRequest,
  ICustomerRepository,
} from "@modules/custumers/repositories/ICustumerRepository";

@injectable()
class ListCustomersUseCase {
  constructor(
    @inject("CustomerRepository")
    private customerRepository: ICustomerRepository
  ) {}

  async execute({
    name,
    email,
    id,
  }: ICustomerFilterRequest): Promise<Customer[]> {
    const customers = await this.customerRepository.list({ email, name, id });

    return customers;
  }
}

export { ListCustomersUseCase };
