/* eslint-disable no-unused-vars */
import { Model, Schema } from "mongoose";

interface IReview {
  review: string;
  rating: number;
  createdAt: Date;
  tour: Schema.Types.ObjectId;
  user: Schema.Types.ObjectId;
}

interface IReviewModel extends Model<IReview> {
  calcAvgRatings(id: Schema.Types.ObjectId): Promise<void>;
}

export { IReview, IReviewModel };
