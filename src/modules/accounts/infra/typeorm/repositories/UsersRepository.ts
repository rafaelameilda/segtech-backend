import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import {
  IUsersRepository,
  IUsersRetorno,
  IFindAllOrUser,
} from "../../../repositories/IUsersRepository";
import { User } from "../entities/User";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    email,
    password,
    username,
    avatar,
    id,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      password,
      username,
      avatar,
      id,
    });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.repository.findOne({ email });

    return user;
  }

  async findById(user_id: string): Promise<User | undefined> {
    const user = await this.repository.findOneOrFail(user_id);

    return user;
  }

  async findAll({
    name,
    initDate,
    finishDate,
    id,
    take,
    page,
  }: IFindAllOrUser): Promise<IUsersRetorno> {
    const usersQuery = this.repository
      .createQueryBuilder("c")
      .where("1=1")
      .take(take)
      .skip(page * take);

    if (name) {
      usersQuery.andWhere("UPPER(c.name) LIKE UPPER('%'||:name||'%' )", {
        name,
      });
    }

    if (initDate && finishDate) {
      usersQuery.andWhere("c.created_at BETWEEN :initDate and :finishDate", {
        initDate,
        finishDate,
      });
    }

    if (id) {
      usersQuery.andWhere("c.id = :id", { id });
    }

    usersQuery.orderBy({ id: "ASC" });

    const [users, total] = await usersQuery.getManyAndCount();

    const totalPages = Math.ceil(total / take);

    return { users, pagination: { page, take, total, totalPages } };
  }
}

export { UsersRepository };
