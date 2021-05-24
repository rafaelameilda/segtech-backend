import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOrderORService1619697981054 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "order_service",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "customer_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "reference",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "date_visit",
            type: "timestamp",
          },
          {
            name: "validity",
            type: "numeric",
          },
          {
            name: "deadline",
            type: "varchar",
          },
          {
            name: "brand",
            type: "varchar",
          },
          {
            name: "model",
            type: "varchar",
          },
          {
            name: "discount",
            type: "numeric",
          },
          {
            name: "type",
            type: "varchar",
          },
          {
            name: "warranty",
            type: "varchar",
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
        foreignKeys: [
          {
            name: "FKCustomerOrderService",
            referencedTableName: "customers",
            referencedColumnNames: ["id"],
            columnNames: ["customer_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("order_service");
  }
}
