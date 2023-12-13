/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose, { ModifyResult } from "mongoose";
import { ITour } from "../interfaces/tour.interface";
import Tour from "../models/tour.model";

const createTour = async (tourData: ITour): Promise<ITour> => {
  const result = await Tour.create(tourData);

  return result;
};

const getAllTour = async (): Promise<ITour[]> => {
  const result = await Tour.find();

  return result;
};

const getSingleTour = async (id: string): Promise<ITour | null> => {
  const result = await Tour.findById(id);

  return result;
};

const updateSingleTour = async (
  id: string,
  toursData: ITour,
): Promise<ITour | null> => {
  const result = await Tour.findByIdAndUpdate(id, toursData, {
    new: true,
    runValidators: true,
  });

  return result;
};

const deleteSingleTour = async (
  id: string,
): Promise<
  ModifyResult<
    ITour & {
      _id: mongoose.Types.ObjectId;
    }
  >
> => {
  const result = await Tour.findByIdAndDelete(id);

  return result;
};

const getNextSchedule = async (id: string): Promise<any> => {
  const tour = await Tour.findById(id);

  const nextSchedule = tour?.getNearestStartDateAndEndDate();

  return {
    tour,
    nextSchedule,
  };
};

export const tourServices = {
  createTour,
  getAllTour,
  getSingleTour,
  updateSingleTour,
  deleteSingleTour,
  getNextSchedule,
};
