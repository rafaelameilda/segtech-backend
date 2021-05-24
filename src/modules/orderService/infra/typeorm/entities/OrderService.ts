import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { CatalogServices } from "@modules/catalogServices/infra/typeorm/entities/CatalogServices";
import { Materials } from "@modules/materials/infra/typeorm/entities/Materials";

@Entity("order_service")
class OrderService {
  @PrimaryColumn()
  id: string;

  @Column()
  customer_id: string;

  @Column()
  reference: string;

  @Column()
  date_visit: Date;

  @Column()
  validity: number;

  @Column()
  deadline: Date;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column()
  discount: number;

  @Column()
  type: string;

  @Column()
  warranty: string;

  @ManyToMany(() => CatalogServices)
  @JoinTable({
    name: "services_order_service",
    joinColumns: [{ name: "order_service_id" }],
    inverseJoinColumns: [{ name: "catalog_services_id" }],
  })
  catalog_services: CatalogServices[];

  @ManyToMany(() => Materials)
  @JoinTable({
    name: "materials_order_service",
    joinColumns: [{ name: "order_service_id" }],
    inverseJoinColumns: [{ name: "material_id" }],
  })
  materials: Materials[];

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

export { OrderService };
