import express, { Request, Response } from 'express';
import { register, login } from '../controllers/authController';

const router = express.Router();

// Register route
router.post('/register', async (req: Request, res: Response) => {
  try {
    await register(req, res);  // Call the register controller function
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Login route
router.post('/login', async (req: Request, res: Response) => {
  try {
    await login(req, res);  // Call the login controller function
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default router;


// import express from 'express';
// import { register, login } from '../controllers/authController';

// const router = express.Router();

// router.post('/register', register);
// router.post('/login', login);

// export default router;
