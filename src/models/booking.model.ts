import { Schema, model } from "mongoose";
import IBooking from "../interfaces/booking.interface";

const bookingSchema = new Schema<IBooking>({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  tour: {
    type: Schema.Types.ObjectId,
    ref: "Tour", // Reference to the Tour model
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ["pending", "completed", "canceled"],
    default: "pending",
  },
  paymentMethod: {
    type: String,
    required: true,
  },
});

const Booking = model<IBooking>("Booking", bookingSchema);

export default Booking;
