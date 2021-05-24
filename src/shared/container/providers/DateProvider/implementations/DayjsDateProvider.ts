import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import { IDateProvider } from "../IDateProvider";

dayjs.extend(utc);

class DayjsDateProvider implements IDateProvider {
  compareInHours(start_date: Date, end_date: Date): number {
    const end_date_utc = this.convertToUTC(end_date);
    const start_date_utc = this.convertToUTC(start_date);

    return dayjs(end_date_utc).diff(start_date_utc, "hours");
  }

  convertToUTC(date: Date): string {
    return dayjs(date).utc().local().format();
  }

  dateNow(): Date {
    return dayjs().toDate();
  }

  compareInDays(start_date: Date, end_date: Date): number {
    const end_date_utc = this.convertToUTC(end_date);
    const start_date_utc = this.convertToUTC(start_date);

    return dayjs(end_date_utc).diff(start_date_utc, "days");
  }

  addDays(days: number): Date {
    return dayjs().add(days, "days").toDate();
  }

  addHours(hours: number): Date {
    return dayjs().add(hours, "hour").toDate();
  }

  compareIfBefore(start_date: Date, end_date: Date): boolean {
    return dayjs(start_date).isBefore(end_date);
  }

  formatDateToBetweenPostGress(date: Date, start_date: boolean): Date {
    const [eDay, eMonth, eYear] = String(date).split("/", 3);
    const eeDay = String(eDay).padStart(2, "0");
    const eeMonth = String(eMonth).padStart(2, "0");

    let dateParameter = dayjs(`${eYear}-${eeMonth}-${eeDay}}`)
      .utc()
      .local()
      .toDate();

    if (!start_date) {
      dateParameter = dayjs(dateParameter).hour(19).minute(59).toDate();
    }

    return dateParameter;
  }
}

export { DayjsDateProvider };
