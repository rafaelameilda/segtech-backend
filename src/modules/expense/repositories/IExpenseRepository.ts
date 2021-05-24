import { ICreateExpenseDTO } from "../dto/ICreateExpenseDTO";

interface IExpenseRepository {
  create(data: ICreateExpenseDTO): Promise<void>;
}

export { IExpenseRepository };
