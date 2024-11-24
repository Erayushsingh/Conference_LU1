import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import { registerInput, signInInput } from "../config/types.js";

export const registerUser = async (req, res) => {
  const parsedBody = registerInput.safeParse(req.body);
  if (!parsedBody.success) {
    return res
      .status(400)
      .json({ message: "Please check your input format!!" });
  }

  try {
    const existingUser = await User.findOne({ email: parsedBody.data.email });

    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    const hashedPassword = await bcrypt.hash(parsedBody.data.password, 10);

    const newUser = await User.create({
      name: parsedBody.data.name,
      email: parsedBody.data.email,
      phone: parsedBody.data.phone,
      organization: parsedBody.data.organization,
      place: parsedBody.data.place,
      address: parsedBody.data.address,
      password: hashedPassword,
    });

    res
      .status(201)
      .json({ UserId: newUser._id, message: "Registration successful" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const signInUser = async (req, res) => {
  const parsedBody = signInInput.safeParse(req.body);
  if (!parsedBody.success) {
    res.status(401);
    throw new Error("fill all required fiels..");
  }
  const user = await User.findOne({ email: parsedBody.data.email });

  const passCompare = await bcrypt.compare(
    parsedBody.data.password,
    user.password
  );
  if (user && passCompare) {
    const acessToken = jwt.sign(
      {
        user: {
          id: user._id,
          email: user.email,
          user: user.name,
        },
      },
      process.env.SECRET_TOKEN,
      { expiresIn: "1h" }
    );
    res.status(201).json({ acessToken });
    // console.log(acessToken);
  } else {
    res.status(401);
    throw new Error("Eiter email or passwd is invalid..");
  }
};
export const logoutUser = async (req,res) =>{
  res.clearCookie("token").json({msg:"User logout"})
}
