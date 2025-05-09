import { Request, Response } from 'express';
import User from '../models/User';

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await User.find({ role: 'user' }).select('-password');
  res.json(users);
};
