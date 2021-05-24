import { Router } from "express";

import { CreateMaterialsController } from "@modules/materials/useCases/createMaterials/createMaterialsController";
import { DeleteMaterialController } from "@modules/materials/useCases/deleteMaterials/DeleteMaterialsController";
import { ListMaterialsController } from "@modules/materials/useCases/listMaterials/listMaterialsController";
import { UpdateMaterialController } from "@modules/materials/useCases/updateMaterials/UpdateMaterialsController";

const materialsRouter = Router();

const createMaterialsController = new CreateMaterialsController();
const listMaterialsController = new ListMaterialsController();
const updateMaterialController = new UpdateMaterialController();
const deleteMaterialController = new DeleteMaterialController();

materialsRouter.post("/", createMaterialsController.handle);
materialsRouter.get("/", listMaterialsController.handle);
materialsRouter.get("/:id", listMaterialsController.handle);
materialsRouter.put("/:id", updateMaterialController.handle);
materialsRouter.delete("/:id", deleteMaterialController.handle);

export { materialsRouter };
