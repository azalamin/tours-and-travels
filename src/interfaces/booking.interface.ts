import { Schema } from "mongoose";

interface IBooking {
  user: Schema.Types.ObjectId;
  tour: Schema.Types.ObjectId;
  createdAt: Date;
  startDate: Date;
  endDate: Date;
  totalPrice: number;
  paymentStatus: "pending" | "completed" | "canceled";
  paymentMethod: string;
}

export default IBooking;
