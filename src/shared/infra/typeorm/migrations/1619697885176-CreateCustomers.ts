import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCustomers1619697885176 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "customers",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "contact",
            type: "varchar",
          },
          {
            name: "email",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "telephone",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "type_customer",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "cpf",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "cnpj",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "municipal_registration",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "estadual_registration",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "social_reason",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "birth_date",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "additional_information",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "cep",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "logradouro",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "number",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "complement",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "district",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "city",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "state",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("customers");
  }
}
