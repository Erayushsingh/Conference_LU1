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

    const newUser = await prisma.user.create({
      data: {
        name: parsedBody.data.name,
        email: parsedBody.data.email,
        phone: parsedBody.data.phone,
        organization: parsedBody.data.organization,
        place: parsedBody.data.place,
        address: parsedBody.data.address,
        password: hashedPassword,
      },
    });
    // console.log(newUser.Id);
    res.status(201).json({ message: "Registration successful", newUser });
  } catch (err) {
    // console.log(err);
    res.status(500).json({ message: "Server error", err });
  }
};

export const signInUser = async (req, res) => {
  const parsedBody = signInInput.safeParse(req.body);
  if (!parsedBody.success) {
    res.status(401);
    throw new Error("fill all required fiels..");
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email: parsedBody.data.email },
    });

    const passCompare = await bcrypt.compare(
      parsedBody.data.password,
      user.password
    );
    // console.log(parsedBody)
    if (user && passCompare) {
      const accessToken = jwt.sign(
        {
          id: user.id,
          email: user.email,
          Role: user.role,
        },
        process.env.SECRET_TOKEN,
        { expiresIn: "7d" }
      );
      // console.log(accessToken);
      res

        .status(201)
        .json({
          accessToken,
          message: "Login success",
          success: true,
          role: user.role,
        });
      // console.log(acessToken);
    }
  } catch (err) {
    res.status(500).json({ msg: "error while login " , err});
  }
};
export const logoutUser = async (req, res) => {
  res.clearCookie("accessToken").json({ msg: "User logout" });
};
