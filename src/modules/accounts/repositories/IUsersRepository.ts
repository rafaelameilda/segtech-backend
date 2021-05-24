import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../infra/typeorm/entities/User";

interface IPagination {
  take: number;
  page: number;
  total: number;
  totalPages: number;
}

interface IUsersRetorno {
  users: User[];
  pagination: IPagination;
}

interface IFindAllOrUser {
  take: number;
  page: number;
  name?: string;
  initDate?: Date;
  finishDate?: Date;
  id?: string;
}

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User | undefined>;
  findById(id: string): Promise<User | undefined>;
  findAll(data: IFindAllOrUser): Promise<IUsersRetorno>;
}

export { IUsersRepository, IUsersRetorno, IFindAllOrUser };
