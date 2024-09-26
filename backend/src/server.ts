import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
import userRoutes from './routes/user'; // Import user routes
import { sequelize } from './config/database';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes); // Register the user routes

// Synchronize Sequelize models with the database
const PORT = process.env.PORT || 5000;

sequelize.sync({ alter: true })  // Creates the table if it doesn't exist and alters it if it does
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
