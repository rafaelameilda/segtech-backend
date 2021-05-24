import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateExpense1619732471817 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "expenses",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "date_expenses",
            type: "timestamp",
          },
          {
            name: "expense_amount",
            type: "numeric",
          },
          {
            name: "expense_category",
            type: "varchar",
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "customer_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "order_or_service_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "annotations",
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
        foreignKeys: [
          {
            name: "FKCustomerExpense",
            referencedTableName: "customers",
            referencedColumnNames: ["id"],
            columnNames: ["customer_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "FKOrderOrService",
            referencedTableName: "order_service",
            referencedColumnNames: ["id"],
            columnNames: ["order_or_service_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("expenses");
  }
}
