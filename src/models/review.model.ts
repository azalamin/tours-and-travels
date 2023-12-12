import { Schema, model } from "mongoose";
import { IReview } from "../interfaces/review.interface";

const reviewSchema = new Schema<IReview>({
  review: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  tour: {
    type: Schema.Types.ObjectId,
    ref: "Tour", // Reference to the Tour model
    required: [true, "Please give your tour"],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: [true, "Please give your user"],
  },
});

const Review = model<IReview>("Review", reviewSchema);

export default Review;
