import express from "express";
import { bookingControllers } from "../controllers/booking.controller";

const router = express.Router();

router.post("/create-booking", bookingControllers.createBooking);
router.get("/", bookingControllers.getAllBooking);
router.get("/:id", bookingControllers.getSingleBooking);
router.patch("/:id", bookingControllers.updateSingleBooking);
router.delete("/:id", bookingControllers.deleteSingleBooking);

export const bookingRoutes = router;
