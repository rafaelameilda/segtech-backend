import { inject, injectable } from "tsyringe";

import { ICustomerRepository } from "@modules/custumers/repositories/ICustumerRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class DeleteCustomerUseCase {
  constructor(
    @inject("CustomerRepository")
    private customerRepository: ICustomerRepository
  ) {}

  async execute(id: string): Promise<void> {
    const customerExists = await this.customerRepository.list({ id });

    if (customerExists && !customerExists[0].id) {
      throw new AppError("Customer does not exists!");
    }

    await this.customerRepository.delete(id);
  }
}

export { DeleteCustomerUseCase };
