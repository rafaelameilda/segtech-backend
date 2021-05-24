import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("customers")
class Customer {
  @PrimaryColumn()
  id: string;

  @Column()
  contact: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  telephone: string;

  @Column()
  type_customer: string;

  @Column()
  cpf: string;

  @Column()
  cnpj: string;

  @Column()
  municipal_registration: string;

  @Column()
  estadual_registration: string;

  @Column()
  social_reason: string;

  @Column()
  birth_date: Date;

  @Column()
  additional_information: string;

  @Column()
  cep: string;

  @Column()
  logradouro: string;

  @Column()
  number: string;

  @Column()
  complement: string;

  @Column()
  district: string;

  @Column()
  city: string;

  @Column()
  state: string;

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

export { Customer };
