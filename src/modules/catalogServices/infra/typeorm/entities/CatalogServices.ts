import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("catalog_services")
class CatalogServices {
  @PrimaryColumn()
  id: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  unity_type: string;

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

export { CatalogServices };
