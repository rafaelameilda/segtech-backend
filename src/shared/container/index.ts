import { container } from "tsyringe";

import "@shared/container/providers";

import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { UsersTokensRepository } from "@modules/accounts/infra/typeorm/repositories/UsersTokensRepository";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { IUsersTokensRepository } from "@modules/accounts/repositories/IUsersTokensRepository";
import { AppointmentsRepository } from "@modules/appointments/infra/repositories/AppointmentsRepository";
import { IAppointmentsRepository } from "@modules/appointments/repositories/IAppointmentsRepository";
import { CatalogServicesRepository } from "@modules/catalogServices/infra/typeorm/repositories/CatalogServicesRepositories";
import { ICatalogServicesRepository } from "@modules/catalogServices/repositories/ICatalogServicesRepositories";
import { CustomerRepository } from "@modules/custumers/infra/typeorm/repositories/CustomerRepository";
import { ICustomerRepository } from "@modules/custumers/repositories/ICustumerRepository";
import { ExpenseRepository } from "@modules/expense/infra/typeorm/repositories/ExpenseRepository";
import { IExpenseRepository } from "@modules/expense/repositories/IExpenseRepository";
import { MaterialsRepository } from "@modules/materials/infra/typeorm/repositories/MaterialsRepository";
import { IMaterialsRepository } from "@modules/materials/repositories/IMaterialsRepository";
import { OrderServiceRepository } from "@modules/orderService/infra/typeorm/repositories/OrderServiceRepository";
import { IOrderServiceRepository } from "@modules/orderService/repositories/IOrderServiceRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IUsersTokensRepository>(
  "UsersTokensRepository",
  UsersTokensRepository
);

container.registerSingleton<IMaterialsRepository>(
  "MaterialsRepository",
  MaterialsRepository
);

container.registerSingleton<ICatalogServicesRepository>(
  "CatalogServicesRepository",
  CatalogServicesRepository
);

container.registerSingleton<ICustomerRepository>(
  "CustomerRepository",
  CustomerRepository
);

container.registerSingleton<IOrderServiceRepository>(
  "OrderServiceRepository",
  OrderServiceRepository
);

container.registerSingleton<IExpenseRepository>(
  "ExpenseRepository",
  ExpenseRepository
);

container.registerSingleton<IAppointmentsRepository>(
  "AppointmentsRepository",
  AppointmentsRepository
);
