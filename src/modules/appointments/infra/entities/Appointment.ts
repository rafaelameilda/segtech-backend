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

@Entity("appointments")
class Appointment {
  @PrimaryColumn()
  id: string;

  @Column()
  date: Date;

  @Column()
  customer_id: string;

  @Column()
  order_or_service_id: string;

  @ManyToMany(() => CatalogServices)
  @JoinTable({
    name: "services_appointments",
    joinColumns: [{ name: "appointment_id" }],
    inverseJoinColumns: [{ name: "catalog_services_id" }],
  })
  catalog_services: CatalogServices[];

  @ManyToMany(() => Materials)
  @JoinTable({
    name: "materials_appointments",
    joinColumns: [{ name: "appointment_id" }],
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

export { Appointment };
