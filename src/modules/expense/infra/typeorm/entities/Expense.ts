import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("expenses")
class Expense {
  @PrimaryColumn()
  id: string;

  @Column()
  date_expenses: Date;

  @Column()
  expense_amount: number;

  @Column()
  expense_category: string;

  @Column()
  description: string;

  @Column()
  customer_id: string;

  @Column()
  order_or_service_id: string;

  @Column()
  annotations: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Expense };
