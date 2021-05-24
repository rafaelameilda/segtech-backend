import { Router } from "express";

import { CatalogServicesController } from "@modules/catalogServices/useCases/createCatalogService/CatalogServicesController";
import { DeleteCatalogServiceController } from "@modules/catalogServices/useCases/deleteCatalogService/DeleteCatalogServiceController";
import { ListCatalogServicesController } from "@modules/catalogServices/useCases/listCatalogService/ListCatalogServiceController";
import { UpdateCatalogServicesController } from "@modules/catalogServices/useCases/updateCatalogServices/UpdateCatalogServicesController";

const catalogServiceRouter = Router();

const catalogServicesController = new CatalogServicesController();
const listCatalogServicesController = new ListCatalogServicesController();
const updateCatalogServicesController = new UpdateCatalogServicesController();
const deleteCatalogServiceController = new DeleteCatalogServiceController();

catalogServiceRouter.post("/", catalogServicesController.handle);
catalogServiceRouter.get("/", listCatalogServicesController.handle);
catalogServiceRouter.get("/:id", listCatalogServicesController.handle);
catalogServiceRouter.put("/:id", updateCatalogServicesController.handle);
catalogServiceRouter.delete("/:id", deleteCatalogServiceController.handle);

export { catalogServiceRouter };
