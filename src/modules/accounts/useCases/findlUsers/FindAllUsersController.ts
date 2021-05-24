import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindAllUsersUseCase } from "./FindAllUsersUseCase";

class FindAllUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findAllUserUseCase = container.resolve(FindAllUsersUseCase);

    const { nome, data1, data2, page, take } = request.query as any;
    const { id } = request.params;

    const users = await findAllUserUseCase.execute({
      page: page ? Number(page) : 1,
      take: take ? Number(take) : 1,
      id,
      name: nome,
      initDate: data1,
      finishDate: data2,
    });

    return response.json(users);
  }
}

export { FindAllUsersController };
