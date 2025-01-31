import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js'; // Assuming you have a User model for MongoDB

// Signup Function
export const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Check if all required fields are provided
    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    // Generate a token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(201).json({ user: newUser, token });
  } catch (error) {
    console.error('Error during signup:', error.message);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};

// Login Function
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare the password
    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate a token
    const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ user: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
};

// Forget Password Function
export const forgetPassword = async (req, res) => {
  try {
    const { email } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Generate a temporary reset token (not JWT)
    const resetToken = Math.random().toString(36).substring(2, 15);

    // Store the reset token in the user's document (you may use a separate field for this)
    user.resetToken = resetToken;
    user.resetTokenExpires = Date.now() + 3600000; // Token valid for 1 hour
    await user.save();

    // Send the reset token via email (use your email service here)
    console.log(`Reset token for ${email}: ${resetToken}`); // Replace this with actual email logic

    res.status(200).json({ message: 'Reset token sent to email' });
  } catch (error) {
    res.status(500).json({ message: 'Error processing forget password', error: error.message });
  }
};
