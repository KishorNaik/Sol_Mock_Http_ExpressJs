import { Router } from "express";
import { UserController } from "../controller/user.controller";

const router=Router();

let userController:UserController=new UserController();


router.get('/getUserData/:id',userController.getUserData.bind(userController));

export default router;