import express from "express";
import { reviewControllers } from "../controllers/review.controller";

const router = express.Router();

router.post("/create-review", reviewControllers.createReview);
router.get("/", reviewControllers.getAllReview);
router.get("/:id", reviewControllers.getSingleReview);
router.patch("/:id", reviewControllers.updateSingleReview);
router.delete("/:id", reviewControllers.deleteSingleReview);

export const reviewRoutes = router;
