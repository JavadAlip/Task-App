// import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';
// import User from '../models/User';

// interface AuthRequest extends Request {
//   user?: any;
// }

// export const protect = async (req: AuthRequest, res: Response, next: NextFunction) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith('Bearer '))
//     return res.status(401).json({ message: 'Unauthorized, no token' });

//   const token = authHeader.split(' ')[1];
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
//     const user = await User.findById(decoded.id).select('-password');
//     if (!user) return res.status(404).json({ message: 'User not found' });
//     req.user = user;
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }
// };

// export const isAdmin = (req: AuthRequest, res: Response, next: NextFunction) => {
//   if (req.user && req.user.role === 'admin') {
//     next();
//   } else {
//     res.status(403).json({ message: 'Access denied: Admins only' });
//   }
// };


// src/middlewares/authMiddleware.ts


import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';

interface AuthRequest extends Request {
  user?: any;
}

export const protect = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ message: 'Unauthorized, no token' });
    return;
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
    const user = await User.findById(decoded.id).select('-password');

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

export const isAdmin = (req: AuthRequest, res: Response, next: NextFunction): void => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Access denied: Admins only' });
  }
};
