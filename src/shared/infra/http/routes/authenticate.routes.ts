import { Router } from "express";

import { AuthenticateUserController } from "@modules/accounts/useCases/authenticateUser/AuthenticateUserController";
import { RefreshTokenController } from "@modules/accounts/useCases/refreshToken/RefreshTokenController";
import { ValidateTokenController } from "@modules/accounts/useCases/validateToken/ValidateTokenController";

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();
const refreshTokenController = new RefreshTokenController();
const validateTokenController = new ValidateTokenController();

authenticateRoutes.post("/sessions", authenticateUserController.handle);
authenticateRoutes.post("/refresh-token", refreshTokenController.handle);
authenticateRoutes.post("/validate_token", validateTokenController.handle);

export { authenticateRoutes };
