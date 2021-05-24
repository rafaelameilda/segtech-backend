import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMaterials1619697866880 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "materials",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "unity",
            type: "varchar",
          },
          {
            name: "material_custo",
            type: "numeric",
          },
          {
            name: "profit_margin",
            type: "numeric",
          },
          {
            name: "material_price",
            type: "numeric",
          },
          {
            name: "brand",
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
    await queryRunner.dropTable("materials");
  }
}
