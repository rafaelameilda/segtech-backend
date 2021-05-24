import { ICreateOrderServiceDTO } from "../dto/ICreateOrderServiceDTO";
import { OrderService } from "../infra/typeorm/entities/OrderService";

interface IListOrderServiceRequest {
  order_id?: string;
}

interface IOrderServiceRepository {
  create(data: ICreateOrderServiceDTO): Promise<OrderService>;
  list(data: IListOrderServiceRequest): Promise<OrderService[]>;
  findById(order_id: string): Promise<OrderService | undefined>;
}

export { IOrderServiceRepository, IListOrderServiceRequest };
