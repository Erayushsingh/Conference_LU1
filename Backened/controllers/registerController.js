import bcrypt from 'bcryptjs';
import validator from 'validator';
import User from '../models/registerModel.js';


export const registerUser = async (req, res) => {
  const { email, phone, organization, place, address, password } = req.body;

  if (!email || !phone || !organization || !place || !address || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: 'Invalid email address' });
  }

  if (!validator.isLength(password, { min: 6 })) {
    return res.status(400).json({ message: 'Password must be at least 6 characters' });
  }

  try {
    const existingUser = await User.findOne({ $or: [{ email }, { phone }] });

    if (existingUser) {
      return res.status(400).json({ message: 'Email or phone number already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      phone,
      organization,
      place,
      address,
      password: hashedPassword,
    });

    // Save the new user to the database
    await newUser.save();

    // Send success response
    res.status(201).json({ message: 'Registration successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
