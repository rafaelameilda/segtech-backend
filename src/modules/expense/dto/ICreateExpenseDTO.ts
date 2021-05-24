interface ICreateExpenseDTO {
  id?: string;
  date_expenses: Date;
  expense_amount: number;
  expense_category: string;
  description: string;
  customer_id?: string;
  order_or_service_id?: string;
  annotations: string;
}

export { ICreateExpenseDTO };
