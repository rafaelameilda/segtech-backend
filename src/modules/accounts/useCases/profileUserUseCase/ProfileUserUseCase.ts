import { inject, injectable } from "tsyringe";

import { IUserResponseDTO } from "@modules/accounts/dtos/IUserResponseDTO";
import { UserMap } from "@modules/accounts/mapper/UserMap";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

@injectable()
class ProfileUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(id: string): Promise<IUserResponseDTO | undefined> {
    const user = await this.usersRepository.findById(id);

    if (user) {
      return UserMap.toDTO(user);
    }

    return user;
  }
}

export { ProfileUserUseCase };
