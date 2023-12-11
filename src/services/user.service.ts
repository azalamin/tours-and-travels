import { IUser } from "../interfaces/user.interface";
import User from "../models/user.model";

const createUser = async (userData: IUser): Promise<IUser[]> => {
  const result = await User.find(userData);

  return result;
};

export const userServices = {
  createUser,
};
