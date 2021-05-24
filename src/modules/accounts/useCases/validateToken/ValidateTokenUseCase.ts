import { verify } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import auth from "@config/auth";
import { IUsersTokensRepository } from "@modules/accounts/repositories/IUsersTokensRepository";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { AppError } from "@shared/errors/AppError";

interface IPayload {
  sub: number;
  exp: number;
  iat: string;
}

@injectable()
class ValidateTokenUseCase {
  constructor(
    @inject("UsersTokensRepository")
    private usersTokensRepository: IUsersTokensRepository,

    @inject("DayjsDateProvider")
    private dateProvider: IDateProvider
  ) {}

  async execute(token: string): Promise<boolean> {
    const { exp } = verify(token, auth.secret_token) as IPayload;

    if (new Date(exp * 1000) > new Date()) {
      return true;
    }
    return false;
  }
}

export { ValidateTokenUseCase };
