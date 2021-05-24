import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAppointments1619732549636 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "appointments",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "date",
            type: "timestamp",
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
            name: "FKOrderOrServiceAppointments",
            referencedTableName: "order_service",
            referencedColumnNames: ["id"],
            columnNames: ["order_or_service_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "FKOrderOrServiceCustomers",
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
    await queryRunner.dropTable("appointments");
  }
}
