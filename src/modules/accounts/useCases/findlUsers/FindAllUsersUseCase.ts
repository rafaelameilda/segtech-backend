import { inject, injectable } from "tsyringe";

import {
  IUsersRetorno,
  IUsersRepository,
} from "@modules/accounts/repositories/IUsersRepository";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";

interface IRequest {
  page: number;
  take: number;
  name?: string;
  initDate?: Date;
  finishDate?: Date;
  id?: string;
}

@injectable()
class FindAllUsersUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
    @inject("DayjsDateProvider")
    private dateProvider: IDateProvider
  ) {}

  async execute({
    name,
    initDate,
    finishDate,
    id,
    page,
    take,
  }: IRequest): Promise<IUsersRetorno> {
    let start_date;
    let end_date;

    if (initDate && finishDate) {
      start_date = this.dateProvider.formatDateToBetweenPostGress(
        initDate,
        true
      );
      end_date = this.dateProvider.formatDateToBetweenPostGress(
        finishDate,
        false
      );
    }

    const newPage = page === 1 ? 0 : page - 1;

    const users = await this.usersRepository.findAll({
      page: newPage,
      take,
      id,
      initDate: start_date,
      finishDate: end_date,
      name,
    });

    return users;
  }
}

export { FindAllUsersUseCase };
