import { inject, injectable } from "tsyringe";

import { Appointment } from "@modules/appointments/infra/entities/Appointment";
import { IAppointmentsRepository } from "@modules/appointments/repositories/IAppointmentsRepository";

@injectable()
class ListAllAppointmentsUseCase {
  constructor(
    @inject("AppointmentsRepository")
    private appointmentsRepository: IAppointmentsRepository
  ) {}

  async execute(): Promise<Appointment[]> {
    const appointments = await this.appointmentsRepository.list();

    return appointments;
  }
}

export { ListAllAppointmentsUseCase };
