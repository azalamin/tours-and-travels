import { Request, Response } from "express";
import { IReview } from "../interfaces/review.interface";
import { reviewServices } from "../services/review.service";

const createReview = async (req: Request, res: Response) => {
  try {
    const reviewData: IReview = req.body;
    const result = await reviewServices.createReview(reviewData);

    res.status(200).json({
      success: true,
      message: "Review created successfully!",
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

const getAllReview = async (req: Request, res: Response) => {
  try {
    const result = await reviewServices.getAllReview();

    res.status(200).json({
      success: true,
      message: "Reviews retrieved successfully!",
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

const getSingleReview = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await reviewServices.getSingleReview(id);

    res.status(200).json({
      success: true,
      message: "Review found successfully!",
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

const updateSingleReview = async (req: Request, res: Response) => {
  try {
    const reviewData = req.body;
    const { id } = req.params;
    const result = await reviewServices.updateSingleReview(id, reviewData);

    res.status(200).json({
      success: true,
      message: "Review updated successfully!",
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

const deleteSingleReview = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await reviewServices.deleteSingleReview(id);

    res.status(200).json({
      success: true,
      message: "Review deleted successfully!",
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

export const reviewControllers = {
  createReview,
  getAllReview,
  getSingleReview,
  updateSingleReview,
  deleteSingleReview,
};
