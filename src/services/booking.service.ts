import mongoose, { ModifyResult } from "mongoose";
import IBooking from "../interfaces/booking.interface";
import Booking from "../models/booking.model";

const createBooking = async (BookingData: IBooking): Promise<IBooking> => {
  const result = await Booking.create(BookingData);

  return result;
};

const getAllBooking = async (): Promise<IBooking[]> => {
  const result = await Booking.find();

  return result;
};

const getSingleBooking = async (id: string): Promise<IBooking | null> => {
  const result = await Booking.findById(id);

  return result;
};

const updateSingleBooking = async (
  id: string,
  BookingsData: IBooking,
): Promise<IBooking | null> => {
  const result = await Booking.findByIdAndUpdate(id, BookingsData, {
    new: true,
    runValidators: true,
  });

  return result;
};

const deleteSingleBooking = async (
  id: string,
): Promise<
  ModifyResult<
    IBooking & {
      _id: mongoose.Types.ObjectId;
    }
  >
> => {
  const result = await Booking.findByIdAndDelete(id);

  return result;
};

export const bookingServices = {
  createBooking,
  getAllBooking,
  getSingleBooking,
  updateSingleBooking,
  deleteSingleBooking,
};
