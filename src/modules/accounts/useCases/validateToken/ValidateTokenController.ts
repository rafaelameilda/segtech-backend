import { Request, Response } from "express";
import { container } from "tsyringe";

import { ValidateTokenUseCase } from "./ValidateTokenUseCase";

class ValidateTokenController {
  async handle(request: Request, response: Response): Promise<Response> {
    const token =
      request.body.token ||
      request.headers["x-access-token"] ||
      request.query.token;

    try {
      const validateTokenUseCase = container.resolve(ValidateTokenUseCase);

      const validate = await validateTokenUseCase.execute(token);

      return response.json(validate);
    } catch (error) {
      return response.status(401).json({ message: "Token expired!" });
    }
  }
}

export { ValidateTokenController };
