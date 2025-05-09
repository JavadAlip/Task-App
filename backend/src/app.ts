// // src/app.ts
// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import dotenv from 'dotenv';
// dotenv.config();

// import authRoutes from './routes/authRoutes';
// import taskRoutes from './routes/taskRoutes';
// import userRoutes from './routes/userRoutes';


// const app = express();
// app.use(cors());
// app.use(express.json());    

// app.use('/api/auth', authRoutes);
// app.use('/api/tasks', taskRoutes);
// app.use('/api/users', userRoutes);

// const PORT = process.env.PORT || 5000;
// mongoose
//   .connect(process.env.MONGO_URI!)
//   .then(() => {
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//   })
//   .catch((err) => console.error(err));

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

app.use('/api/auth', authRoutes);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      // No need for useNewUrlParser and useUnifiedTopology anymore
    });
    console.log('Connected to MongoDB');
    app.listen(5000, () => {
      console.log('Server running on port 5000');
    });
  } catch (err) {
    console.error(err);
  }
};

startServer();
