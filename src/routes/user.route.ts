import express from "express";
import { userControllers } from "../controllers/user.controller";

const router = express.Router();

router.post("/create-user", userControllers.createUser);

export const userRoutes = router;
