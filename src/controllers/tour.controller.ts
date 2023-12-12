import { Request, Response } from "express";
import { ITour } from "../interfaces/tour.interface";
import { tourServices } from "../services/tour.service";

const createTour = async (req: Request, res: Response) => {
  try {
    const tourData: ITour = req.body;
    const result = await tourServices.createTour(tourData);

    res.status(200).json({
      success: true,
      message: "Tour created successfully!",
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

const getAllTour = async (req: Request, res: Response) => {
  try {
    const result = await tourServices.getAllTour();

    res.status(200).json({
      success: true,
      message: "Tours retrieved successfully!",
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

const getSingleTour = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await tourServices.getSingleTour(id);

    res.status(200).json({
      success: true,
      message: "Tour found successfully!",
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

const updateSingleTour = async (req: Request, res: Response) => {
  try {
    const toursData = req.body;
    const { id } = req.params;
    const result = await tourServices.updateSingleTour(id, toursData);

    res.status(200).json({
      success: true,
      message: "Tour updated successfully!",
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

const deleteSingleTour = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await tourServices.deleteSingleTour(id);

    res.status(200).json({
      success: true,
      message: "Tour deleted successfully!",
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

export const tourControllers = {
  createTour,
  getAllTour,
  getSingleTour,
  updateSingleTour,
  deleteSingleTour,
};
