import { Schema, model, Document } from 'mongoose';

interface ITask extends Document {
  title: string;
  description: string;
  priority: string;
  dueDate: Date;
  checklist: string[];
  attachments: string[];
  assignedTo: Schema.Types.ObjectId;
}

const taskSchema = new Schema<ITask>({
  title: { type: String, required: true },
  description: String,
  priority: String,
  dueDate: Date,
  checklist: [String],
  attachments: [String],
  assignedTo: { type: Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

export default model<ITask>('Task', taskSchema);
