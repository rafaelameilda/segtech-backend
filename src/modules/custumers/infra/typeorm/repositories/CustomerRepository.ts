import { getRepository, Repository } from "typeorm";

import { ICreateCostumerDTO } from "@modules/custumers/dto/ICreateCustumerDTO";
import {
  ICustomerFilterRequest,
  ICustomerRepository,
} from "@modules/custumers/repositories/ICustumerRepository";

import { Customer } from "../entities/Customer";

class CustomerRepository implements ICustomerRepository {
  private repository: Repository<Customer>;

  constructor() {
    this.repository = getRepository(Customer);
  }

  async create({
    name,
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
    number,
    social_reason,
    state,
    telephone,
    type_customer,
    id,
  }: ICreateCostumerDTO): Promise<void> {
    const customer = this.repository.create({
      name,
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
      number,
      social_reason,
      state,
      telephone,
      type_customer,
      id,
    });

    await this.repository.save(customer);
  }

  async list({ name, email, id }: ICustomerFilterRequest): Promise<Customer[]> {
    const customerQuery = this.repository.createQueryBuilder("c").where("1=1");

    if (name) {
      customerQuery.andWhere("UPPER(c.name) LIKE UPPER('%'||:name||'%' )", {
        name,
      });
    }

    if (email) {
      customerQuery.andWhere("UPPER(c.email) LIKE UPPER('%'||:email||'%' )", {
        email,
      });
    }

    if (id) {
      customerQuery.andWhere("c.id = :id", { id });
    }

    customerQuery.orderBy({ id: "ASC" });

    const customers = await customerQuery.getMany();

    return customers;
  }

  async delete(id: string): Promise<void> {
    this.repository.delete(id);
  }
}

export { CustomerRepository };
