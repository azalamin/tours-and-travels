import { Schema, model } from "mongoose";
import slugify from "slugify";
import { ITour } from "../interfaces/tour.interface";

const tourSchema = new Schema<ITour>(
  {
    name: {
      type: String,
      required: [true, "Please give your name"],
    },
    durationHours: {
      type: Number,
      required: [true, "Please give your duration Hours"],
    },
    ratingAverage: {
      type: Number,
      required: true,
    },
    ratingQuantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: [true, "Please give your price"],
    },
    imageCover: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    startDates: {
      type: [Date],
      required: true,
    },
    startLocation: {
      type: String,
      required: [true, "Please give your start location"],
    },
    locations: {
      type: [String],
      required: true,
    },
    slug: {
      type: String,
      unique: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

tourSchema.virtual("durationDay").get(function () {
  return this.durationHours / 24;
});

tourSchema.pre("save", async function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Tour = model("Tour", tourSchema);

export default Tour;
