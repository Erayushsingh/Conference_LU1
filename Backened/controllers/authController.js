import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { prisma } from "../config/prisma.js";

import { registerInput, signInInput } from "../config/types.js";

export const registerUser = async (req, res) => {
  const parsedBody = registerInput.safeParse(req.body);
  if (!parsedBody.success) {
    return res
      .status(400)
      .json({ message: "Please check your input format!!" });
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: parsedBody.data.email,
      },
    });

    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    const hashedPassword = await bcrypt.hash(parsedBody.data.password, 10);
    console.log(parsedBody.data);

    const newUser = await prisma.user.create({
      data: {
        name: parsedBody.data.name,
        email: parsedBody.data.email,
        phone: parsedBody.data.phone,
        organization: parsedBody.data.organization,
        place: parsedBody.data.place,
        address: parsedBody.data.address,
        password: hashedPassword,
        screenshot: parsedBody.data.screenshot,
      },
    });
    // console.log(newUser.Id);

    res.status(201).json({ message: "Registration successful", newUser, "screenshot": newUser.screenshot });
  } catch (err) {
    // console.log(err);
    res.status(500).json({ message: "Server error", err });
  }
};

export const signInUser = async (req, res) => {
  const parsedBody = signInInput.safeParse(req.body);
  if (!parsedBody.success) {
    return res.status(400).json({
      message: 'Please fill all required fields',
      errors: parsedBody.error.errors,
    });
  }
  const user = await prisma.user.findUnique({
    where: { email: parsedBody.data.email },
  });

  if (!user) {
    return res.status(401).json({
      message: 'User not found',
    });
  }

  const passCompare = await bcrypt.compare(parsedBody.data.password, user.password);

  if (!passCompare) {
    return res.status(401).json({
      message: 'Invalid credentials',
    });
  }


  try {
    const accessToken = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      process.env.SECRET_TOKEN || 'fallback_secret', // Fallback secret for safety
      { expiresIn: '7d' }
    );

    res.status(200).json({
      accessToken,
      message: 'Login successful',
      success: true,
      role: user.role,
      id: user.id,
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({
      message: 'Error during login',
      error: err.message,
    });
  }
};
export const logoutUser = async (req, res) => {
  res.clearCookie("accessToken").json({ msg: "User logout" });
};
