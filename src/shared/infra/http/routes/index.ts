import { Router } from "express";

import { appointmentsRoutes } from "./appointments.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { catalogServiceRouter } from "./catalog.service.routes";
import { customerRoutes } from "./customer.routes";
import { expenseRoutes } from "./expense.routes";
import { materialsRouter } from "./materials.routes";
import { orderServiceRoutes } from "./order.service.routes";
import { passwordRouter } from "./password.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/password", passwordRouter);
router.use("/materials", materialsRouter);
router.use("/catalog-service", catalogServiceRouter);
router.use("/customer", customerRoutes);
router.use("/order-service", orderServiceRoutes);
router.use("/expenses", expenseRoutes);
router.use("/appointments", appointmentsRoutes);
router.use(authenticateRoutes);

export { router };
