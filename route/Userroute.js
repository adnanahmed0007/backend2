 import { Router } from "express";
 import {UserController} from "../controller/Usercontrooler.js";
 import { LOginUser } from "../controller/Usercontrooler.js";
 import { Content } from "../controller/Usercontrooler.js";
 
const router=Router();
router.route("/register").post(UserController)
router.route("/login").post(LOginUser)
router.route("/content").post(Content)
export default router;