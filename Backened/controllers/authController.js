import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/registerModel.js';  

// Controller to handle user sign-in (authentication)
export const signInUser = async (req, res) => {
  const { email, password } = req.body;

  // Validate user inputs
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    // Check if the user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Compare provided password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Generate a JWT token (for session management)
    const token = jwt.sign({ userId: user._id }, 'yourSecretKey', { expiresIn: '1h' });

    // Send success response with the token and success flag
    res.status(200).json({
      success: true,  // Add this line
      message: 'Authentication successful',
      token,
      user: {
        email: user.email,
        phone: user.phone,
        organization: user.organization,
        place: user.place,
        address: user.address,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
