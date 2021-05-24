import { Router } from "express";

import { CreateUserController } from "@modules/accounts/useCases/createUser/CreateUserController";
import { FindAllUsersController } from "@modules/accounts/useCases/findlUsers/FindAllUsersController";
import { ProfileUserController } from "@modules/accounts/useCases/profileUserUseCase/ProfileUserController";
import { UpdateUserController } from "@modules/accounts/useCases/updateUser/UpdateUserController";

import { ensureAuthenticate } from "../middlewares/ensureAuthenticated";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const profileUserController = new ProfileUserController();
const findAllUsersController = new FindAllUsersController();
const updateUserController = new UpdateUserController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.put("/:id", updateUserController.handle);

usersRoutes.get("/profile", ensureAuthenticate, profileUserController.handle);
usersRoutes.get("/", ensureAuthenticate, findAllUsersController.handle);
usersRoutes.get("/:id", ensureAuthenticate, findAllUsersController.handle);

export { usersRoutes };
