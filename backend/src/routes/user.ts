import { Router } from 'express';
import { authMiddleware } from '../middleware/auth';
import User from '../models/User';

const router = Router();

// Example of a protected route to update user data
router.put('/update', authMiddleware, async (req, res) => {
  try {
    const userId = req.body.userId; // Get user ID from the request
    const { first_name, last_name, email, dob, phone, gender } = req.body;

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update user information
    user.first_name = first_name;
    user.last_name = last_name;
    user.email = email;
    user.dob = dob;
    user.phone = phone;
    user.gender = gender;

    await user.save(); // Save changes to the database

    res.status(200).json({ message: 'User updated successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
});

export default router;
