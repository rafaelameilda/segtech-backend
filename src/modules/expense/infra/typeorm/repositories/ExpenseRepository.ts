import { getRepository, Repository } from "typeorm";

import { ICreateExpenseDTO } from "@modules/expense/dto/ICreateExpenseDTO";
import { IExpenseRepository } from "@modules/expense/repositories/IExpenseRepository";

import { Expense } from "../entities/Expense";

class ExpenseRepository implements IExpenseRepository {
  private repository: Repository<Expense>;

  constructor() {
    this.repository = getRepository(Expense);
  }

  async create({
    annotations,
    date_expenses,
    description,
    expense_amount,
    expense_category,
    customer_id,
    id,
    order_or_service_id,
  }: ICreateExpenseDTO): Promise<void> {
    const expense = this.repository.create({
      annotations,
      customer_id,
      date_expenses,
      description,
      expense_amount,
      expense_category,
      id,
      order_or_service_id,
    });

    await this.repository.save(expense);
  }
}

export { ExpenseRepository };
