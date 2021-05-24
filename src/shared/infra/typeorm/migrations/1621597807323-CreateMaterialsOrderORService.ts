import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMaterialsOrderORService1621597807323
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "materials_order_service",
        columns: [
          {
            name: "order_service_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "material_id",
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
            name: "FKMaterialsOrderORServiceOrderORService",
            referencedTableName: "order_service",
            referencedColumnNames: ["id"],
            columnNames: ["order_service_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "FKMaterialsOrderORServiceMaterials",
            referencedTableName: "materials",
            referencedColumnNames: ["id"],
            columnNames: ["material_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("materials_order_service");
  }
}
