import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateServicesAppointments1619782299941
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "services_appointments",
        columns: [
          {
            name: "appointment_id",
            type: "uuid",
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
            name: "FKServicesAppointmentsAppointments",
            referencedTableName: "appointments",
            referencedColumnNames: ["id"],
            columnNames: ["appointment_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "FKServicesAppointmentsCatalogServices",
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
    await queryRunner.dropTable("services_appointments");
  }
}
