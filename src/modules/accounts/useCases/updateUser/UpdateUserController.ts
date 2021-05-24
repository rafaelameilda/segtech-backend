import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, username } = request.body;
    const { id } = request.params;

    const updateUserUseCase = container.resolve(UpdateUserUseCase);

    await updateUserUseCase.execute({
      name,
      email,
      password,
      username,
      id,
    });

    return response.status(201).send();
  }
}

export { UpdateUserController };
