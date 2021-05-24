import { inject, injectable } from "tsyringe";

import { ICreateCostumerDTO } from "@modules/custumers/dto/ICreateCustumerDTO";
import { ICustomerRepository } from "@modules/custumers/repositories/ICustumerRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class UpdateCustomerUseCase {
  constructor(
    @inject("CustomerRepository")
    private customerRepository: ICustomerRepository
  ) {}

  async execute({
    id,
    additional_information,
    birth_date,
    cep,
    city,
    cnpj,
    complement,
    contact,
    cpf,
    district,
    email,
    estadual_registration,
    logradouro,
    municipal_registration,
    name,
    number,
    social_reason,
    state,
    telephone,
    type_customer,
  }: ICreateCostumerDTO): Promise<void> {
    const customerExists = await this.customerRepository.list({ id });

    if (!customerExists[0].id) {
      throw new AppError("Customer does not exists!");
    }

    await this.customerRepository.create({
      id,
      additional_information,
      birth_date,
      cep,
      city,
      cnpj,
      complement,
      contact,
      cpf,
      district,
      email,
      estadual_registration,
      logradouro,
      municipal_registration,
      name,
      number,
      social_reason,
      state,
      telephone,
      type_customer,
    });
  }
}

export { UpdateCustomerUseCase };
