import { prisma } from "../config/prisma.js";

export const getAllUser = async (req, res) => {
  try {
    const allUser = await prisma.user.findMany({where:{
        role:{
            equals :"user"
        }
    }});
    res.status(200).json(allUser);
  } catch (error) {
    res.status(401).json({ error: "error while fetching users!!!" });
  }
};
export const getAllAbstract = async (req, res) => {
  try {
    const abstractForm = await prisma.abstractForm.findMany();
    res.status(200).json(abstractForm);
  } catch (error) {
    res.status(401).json({ error: "error while fetching Form!!!" });
  }
};