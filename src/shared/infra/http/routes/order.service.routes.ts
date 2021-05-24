import { Router } from "express";

import { CreateOrderServiceController } from "@modules/orderService/useCases/createOrderService/createOrderServiceController";
import { ListOrderServiceController } from "@modules/orderService/useCases/listOrderService/ListOrderServiceController";
import { UpdateOrderServiceController } from "@modules/orderService/useCases/updateOrderService/UpdateOrderServiceController";

const orderServiceRoutes = Router();
const orderServiceController = new CreateOrderServiceController();
const listOrderServiceController = new ListOrderServiceController();
const updateOrderServiceController = new UpdateOrderServiceController();

orderServiceRoutes.post("/", orderServiceController.handle);
orderServiceRoutes.get("/", listOrderServiceController.handle);
orderServiceRoutes.get("/:id", listOrderServiceController.handle);
orderServiceRoutes.put("/:id", updateOrderServiceController.handle);

export { orderServiceRoutes };
