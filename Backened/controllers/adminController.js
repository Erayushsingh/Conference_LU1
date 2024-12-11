import { prisma } from "../config/prisma.js";

export const getAllUser = async (req, res) => {
  try {
    const allUser = await prisma.user.findMany({
      where: {
        role: {
          equals: "user"
        }
      }
    });
    res.status(200).json(allUser);
  } catch (error) {
    res.status(401).json({ error: "error while fetching users!!!" });
  }
};

export const getAllAbstract = async (req, res) => {
  try {
    const abstractForm = await prisma.abstractForm.findMany();
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        console.error("Invalid date string");
        return null;
      }

      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = String(date.getFullYear()).slice(2);

      return `${day}/${month}/${year}`;
    };

    const formattedForms = abstractForm.map((form) => ({
      ...form,
      createdAt: formatDate(form.createdAt),
    }));

    // Send the formatted response
    res.status(200).json(formattedForms);
  } catch (error) {
    console.error("Error:", error);
    res.status(401).json({ error: "Error while fetching forms!" });
  }
};

