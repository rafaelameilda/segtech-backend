import { Router } from "express";

import { CreateCustomerController } from "@modules/custumers/useCases/createCustomer/CreateCustomerController";
import { DeleteCustomerController } from "@modules/custumers/useCases/deleteCustomer/DeleteCustomerController";
import { ListCustomersController } from "@modules/custumers/useCases/listCustomers/ListCutomersController";
import { UpdateCustomerController } from "@modules/custumers/useCases/updateCustomer/UpdateCustomerController";

const customerRoutes = Router();

const createCustomerController = new CreateCustomerController();
const listCustomersController = new ListCustomersController();
const updateCustomerController = new UpdateCustomerController();
const deleteCustomerController = new DeleteCustomerController();

customerRoutes.post("/", createCustomerController.handle);
customerRoutes.get("/", listCustomersController.handle);
customerRoutes.get("/:id", listCustomersController.handle);
customerRoutes.put("/:id", updateCustomerController.handle);
customerRoutes.delete("/:id", deleteCustomerController.handle);

export { customerRoutes };
