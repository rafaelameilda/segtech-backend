import { Router } from "express";

import { ResetPasswordUserController } from "@modules/accounts/useCases/resetPasswordUser/ResetPasswordUserController";

const passwordRouter = Router();

const resetPasswordUserController = new ResetPasswordUserController();

passwordRouter.post("/reset", resetPasswordUserController.handle);

export { passwordRouter };
