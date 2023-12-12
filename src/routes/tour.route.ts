import express from "express";
import { tourControllers } from "../controllers/tour.controller";

const router = express.Router();

router.post("/create-tour", tourControllers.createTour);
router.get("/", tourControllers.getAllTour);
router.get("/:id", tourControllers.getSingleTour);
router.patch("/:id", tourControllers.updateSingleTour);
router.delete("/:id", tourControllers.deleteSingleTour);

export const tourRoutes = router;
