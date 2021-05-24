import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateServicesCatalog1619697913770 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "catalog_services",
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
            name: "price",
            type: "numeric",
          },
          {
            name: "unity_type",
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
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("catalog_services");
  }
}
