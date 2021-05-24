import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateServicesOrderORService1621597830421
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "services_order_service",
        columns: [
          {
            name: "order_service_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "catalog_services_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKServicesOrderORServiceOrderService",
            referencedTableName: "order_service",
            referencedColumnNames: ["id"],
            columnNames: ["order_service_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "FKServicesOrderORServiceCatalogService",
            referencedTableName: "catalog_services",
            referencedColumnNames: ["id"],
            columnNames: ["catalog_services_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("services_order_service");
  }
}
