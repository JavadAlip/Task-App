// import { Request, Response } from 'express';
// import jwt from 'jsonwebtoken';
// import User, { IUser } from '../models/User';

// // Generate JWT
// const generateToken = (id: string) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET!, { expiresIn: '7d' });
// };

// // Register Controller
// export const register = async (req: Request, res: Response): Promise<Response> => {
//   const { name, email, password, role } = req.body;
//   console.log('Request body:', req.body);

//   const userExists = await User.findOne({ email });
//   if (userExists) return res.status(400).json({ message: 'Email already exists' });

//   try {
//     const newUser = await User.create({ name, email, password, role });

//     // Fix: Cast _id to string
//     const token = generateToken((newUser._id as unknown as string));
//     return res.status(201).json({ token, user: newUser });
//   } catch (error) {
//     return res.status(500).json({ message: 'Error creating user', error });
//   }
// };

// // Login Controller
// export const login = async (req: Request, res: Response): Promise<Response> => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email });

//   if (!user || !(await user.comparePassword(password))) {
//     return res.status(401).json({ message: 'Invalid credentials' });
//   }

//   // Fix: Cast _id to string
//   const token = generateToken((user._id as unknown as string));
//   return res.json({ token, user });
// };


import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User, { IUser } from '../models/User';

// Generate JWT
const generateToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET!, { expiresIn: '7d' });
};

// Register Controller
export const register = async (req: Request, res: Response): Promise<Response> => {
  const { name, email, password, role } = req.body;
  console.log('Request body:', req.body);

  const userExists = await User.findOne({ email });
  if (userExists) return res.status(400).json({ message: 'Email already exists' });

  try {
    const newUser = await User.create({ name, email, password, role });

    const token = generateToken((newUser._id as unknown as string));
    return res.status(201).json({ token, user: newUser });
  } catch (error) {
    return res.status(500).json({ message: 'Error creating user', error });
  }
};

// Login Controller
export const login = async (req: Request, res: Response): Promise<Response> => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = generateToken((user._id as unknown as string));
  return res.json({ token, user });
};
