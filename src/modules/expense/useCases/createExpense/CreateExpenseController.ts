import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateExpenseUseCase } from "./CreateExpenseUseCase";

class CreateExpenseController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      annotations,
      date_expenses,
      description,
      expense_amount,
      expense_category,
      customer_id,
      id,
      order_or_service_id,
    } = request.body;

    const createExpenseUseCase = container.resolve(CreateExpenseUseCase);

    await createExpenseUseCase.execute({
      annotations,
      date_expenses,
      description,
      expense_amount,
      expense_category,
      customer_id,
      id,
      order_or_service_id,
    });

    return response.status(201).send();
  }
}

export { CreateExpenseController };
