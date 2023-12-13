/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose, { ModifyResult } from "mongoose";
import { IReview } from "../interfaces/review.interface";
import Review from "../models/review.model";

const createReview = async (reviewData: IReview): Promise<IReview> => {
  const result = await Review.create(reviewData);
  if (result) {
    Review.calcAvgRatings(result.tour);
  }

  return result;
};

const getAllReview = async (): Promise<IReview[]> => {
  const result = await Review.find().populate({
    path: "user",
    select: "name photo",
  });

  return result;
};

const getSingleReview = async (id: string): Promise<IReview | null> => {
  const result = await Review.findById(id);

  return result;
};

const updateSingleReview = async (
  id: string,
  ReviewsData: IReview,
): Promise<IReview | null> => {
  const result = await Review.findByIdAndUpdate(id, ReviewsData, {
    new: true,
    runValidators: true,
  });

  if (result) {
    Review.calcAvgRatings(result.tour);
  }

  return result;
};

const deleteSingleReview = async (
  id: string,
): Promise<
  ModifyResult<
    IReview & {
      _id: mongoose.Types.ObjectId;
    }
  >
> => {
  const result: any = await Review.findByIdAndDelete(id);

  if (result) {
    Review.calcAvgRatings(result.tour);
  }

  return result;
};

export const reviewServices = {
  createReview,
  getAllReview,
  getSingleReview,
  updateSingleReview,
  deleteSingleReview,
};
