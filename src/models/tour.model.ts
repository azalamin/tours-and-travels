import { Schema, model } from "mongoose";
import slugify from "slugify";
import { ITour, ITourMethods, TTourModel } from "../interfaces/tour.interface";

const tourSchema = new Schema<ITour, TTourModel, ITourMethods>(
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

tourSchema.methods.getNearestStartDateAndEndDate = function (): {
  nextNearestDate: Date | null;
  estimatedEndDate: Date | null;
} {
  const today = new Date();
  const futureDate = this.startDates.filter((startDate: Date) => {
    return startDate > today;
  });

  futureDate.sort((a: Date, b: Date) => a.getTime() - b.getTime());

  const nextNearestDate = futureDate[0];
  const estimatedEndDate = new Date(
    nextNearestDate.getTime() + this.durationHours * 60 * 60 * 1000,
  );

  return {
    nextNearestDate,
    estimatedEndDate,
  };
};

const Tour = model<ITour, TTourModel>("Tour", tourSchema);

export default Tour;
