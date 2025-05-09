import express, { Request, Response } from 'express';
import {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
  getUserTasks,
} from '../controllers/taskController';
import { protect, isAdmin } from '../middlewares/authMiddleware';

const router = express.Router();

// Admin: Create Task
router.post('/', protect, isAdmin, async (req: Request, res: Response) => {
  try {
    await createTask(req, res);
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Admin: Get All Tasks
router.get('/', protect, isAdmin, async (req: Request, res: Response) => {
  try {
    await getAllTasks(req, res);
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Admin: Update Task
router.put('/:id', protect, isAdmin, async (req: Request, res: Response) => {
  try {
    await updateTask(req, res);
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Admin: Delete Task
router.delete('/:id', protect, isAdmin, async (req: Request, res: Response) => {
  try {
    await deleteTask(req, res);
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// User: Get Own Tasks
router.get('/my', protect, async (req: Request, res: Response) => {
  try {
    await getUserTasks(req, res);
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default router;



// import express, { Response } from 'express';
// import {
//   createTask,
//   getAllTasks,
//   updateTask,
//   deleteTask,
//   getUserTasks,
// } from '../controllers/taskController';
// import { protect, isAdmin } from '../middlewares/authMiddleware';
// import { AuthRequest } from '../types/AuthRequest'; // Adjust path as needed

// const router = express.Router();

// // Admin: Create Task
// router.post('/', protect, isAdmin, async (req: AuthRequest, res: Response) => {
//   try {
//     await createTask(req, res);
//   } catch (err) {
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

// // Admin: Get All Tasks
// router.get('/', protect, isAdmin, async (req: AuthRequest, res: Response) => {
//   try {
//     await getAllTasks(req, res);
//   } catch (err) {
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

// // Admin: Update Task
// router.put('/:id', protect, isAdmin, async (req: AuthRequest, res: Response) => {
//   try {
//     await updateTask(req, res);
//   } catch (err) {
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

// // Admin: Delete Task
// router.delete('/:id', protect, isAdmin, async (req: AuthRequest, res: Response) => {
//   try {
//     await deleteTask(req, res);
//   } catch (err) {
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

// // User: Get Own Tasks
// router.get('/my', protect, async (req: AuthRequest, res: Response) => {
//   try {
//     await getUserTasks(req, res);
//   } catch (err) {
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

// export default router;
