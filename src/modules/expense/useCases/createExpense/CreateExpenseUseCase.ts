import { inject, injectable } from "tsyringe";

import { ICreateExpenseDTO } from "@modules/expense/dto/ICreateExpenseDTO";
import { IExpenseRepository } from "@modules/expense/repositories/IExpenseRepository";

@injectable()
class CreateExpenseUseCase {
  constructor(
    @inject("ExpenseRepository")
    private expenseRepository: IExpenseRepository
  ) {}

  async execute({
    annotations,
    date_expenses,
    description,
    expense_amount,
    expense_category,
    customer_id,
    id,
    order_or_service_id,
  }: ICreateExpenseDTO): Promise<void> {
    await this.expenseRepository.create({
      annotations,
      date_expenses: new Date(date_expenses),
      description,
      expense_amount,
      expense_category,
      customer_id,
      id,
      order_or_service_id,
    });
  }
}

export { CreateExpenseUseCase };
