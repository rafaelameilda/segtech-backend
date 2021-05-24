import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("materials")
class Materials {
  @PrimaryColumn()
  id: string;

  @Column()
  description: string;

  @Column()
  unity: string;

  @Column()
  material_custo: string;

  @Column()
  profit_margin: string;

  @Column()
  material_price: string;

  @Column()
  brand: string;

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

export { Materials };
