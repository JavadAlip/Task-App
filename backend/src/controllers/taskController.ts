import { Request, Response } from 'express';
import Task from '../models/Task';

export const createTask = async (req: Request, res: Response) => {
  const {
    title,
    description,
    priority,
    dueDate,
    checklist,
    attachments,
    assignedTo,
  } = req.body;

  try {
    const task = await Task.create({
      title,
      description,
      priority,
      dueDate,
      checklist,
      attachments,
      assignedTo,
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Task creation failed', error });
  }
};

export const getAllTasks = async (req: Request, res: Response) => {
  const tasks = await Task.find().populate('assignedTo', 'name email');
  res.json(tasks);
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updated = await Task.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updated);
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.json({ message: 'Task deleted' });
};

export const getUserTasks = async (req: any, res: Response) => {
  const tasks = await Task.find({ assignedTo: req.user._id });
  res.json(tasks);
};
