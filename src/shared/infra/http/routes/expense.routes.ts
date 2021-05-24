import { Router } from "express";

import { CreateExpenseController } from "@modules/expense/useCases/createExpense/CreateExpenseController";

const expenseRoutes = Router();

const createExpenseController = new CreateExpenseController();

expenseRoutes.post("/", createExpenseController.handle);

export { expenseRoutes };
