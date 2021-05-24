import { getRepository, Repository } from "typeorm";

import { ICreateAppointmentDTO } from "@modules/appointments/dto/ICreateAppointmentDTO";
import { IAppointmentsRepository } from "@modules/appointments/repositories/IAppointmentsRepository";

import { Appointment } from "../entities/Appointment";

class AppointmentsRepository implements IAppointmentsRepository {
  private repository: Repository<Appointment>;

  constructor() {
    this.repository = getRepository(Appointment);
  }

  async create({
    customer_id,
    date,
    order_or_service_id,
    id,
    catalog_services,
    materials,
  }: ICreateAppointmentDTO): Promise<void> {
    const appointment = this.repository.create({
      customer_id,
      date,
      order_or_service_id,
      id,
      catalog_services,
      materials,
    });

    await this.repository.save(appointment);
  }

  async list(): Promise<Appointment[]> {
    const appointments = await this.repository.find({
      relations: ["catalog_services", "materials"],
    });
    return appointments;
  }
}

export { AppointmentsRepository };
