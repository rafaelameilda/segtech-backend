import { ICreateCostumerDTO } from "../dto/ICreateCustumerDTO";
import { Customer } from "../infra/typeorm/entities/Customer";

interface ICustomerFilterRequest {
  name?: string;
  email?: string;
  id?: string;
}

interface ICustomerRepository {
  create(data: ICreateCostumerDTO): Promise<void>;
  delete(id: string): Promise<void>;
  list(data: ICustomerFilterRequest): Promise<Customer[]>;
}

export { ICustomerRepository, ICustomerFilterRequest };
