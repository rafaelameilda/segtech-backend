import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMaterialsAppointments1619782325676
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "materials_appointments",
        columns: [
          {
            name: "appointment_id",
            type: "uuid",
          },
          {
            name: "material_id",
            type: "uuid",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKMaterialsAppointmentsAppointments",
            referencedTableName: "appointments",
            referencedColumnNames: ["id"],
            columnNames: ["appointment_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "FKMaterialsAppointmentsMaterials",
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
    await queryRunner.dropTable("materials_appointments");
  }
}
