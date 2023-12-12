import { Request, Response } from "express";
import IBooking from "../interfaces/booking.interface";
import { bookingServices } from "../services/booking.service";

const createBooking = async (req: Request, res: Response) => {
  try {
    const bookingData: IBooking = req.body;
    const result = await bookingServices.createBooking(bookingData);

    res.status(200).json({
      success: true,
      message: "Booking created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error: error,
    });
  }
};

const getAllBooking = async (req: Request, res: Response) => {
  try {
    const result = await bookingServices.getAllBooking();

    res.status(200).json({
      success: true,
      message: "Bookings retrieved successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error: error,
    });
  }
};

const getSingleBooking = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await bookingServices.getSingleBooking(id);

    res.status(200).json({
      success: true,
      message: "Booking found successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error: error,
    });
  }
};

const updateSingleBooking = async (req: Request, res: Response) => {
  try {
    const bookingsData = req.body;
    const { id } = req.params;
    const result = await bookingServices.updateSingleBooking(id, bookingsData);

    res.status(200).json({
      success: true,
      message: "Booking updated successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error: error,
    });
  }
};

const deleteSingleBooking = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await bookingServices.deleteSingleBooking(id);

    res.status(200).json({
      success: true,
      message: "Booking deleted successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error: error,
    });
  }
};

export const bookingControllers = {
  createBooking,
  getAllBooking,
  getSingleBooking,
  updateSingleBooking,
  deleteSingleBooking,
};
