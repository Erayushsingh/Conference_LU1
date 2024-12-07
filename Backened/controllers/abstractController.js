import { prisma } from "../config/prisma.js";
import { createAbstract } from "../config/types.js";

export const submitAbstract = async (req, res) => {
  const parsedBody = createAbstract.safeParse(req.body);

  const userId = req.userId;
  // console.log(userId)

  if (!parsedBody.success) {
    return res.status(400).json({ error: "please check your input!!!" });
  }

  try {
    const newSubmission = await prisma.abstractForm.create({
      data: {
        userId: userId,
        title: parsedBody.data.title,
        authors: parsedBody.data.authors,
        drivelink: parsedBody.data.drivelink,
        keywords: parsedBody.data.keywords,
        preferredPresentation: parsedBody.data.preferredPresentation,
        conferenceTheme: parsedBody.data.conferenceTheme,
        conflictOfInterest: parsedBody.data.conflictOfInterest
      }
    });

    res.status(201).json({ message: 'Abstract submitted successfully!', data: newSubmission });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


export const getSubmissions = async (req, res) => {
  const userId = req.params.id;
  console.log(userId)
  try {
    const submissions = await prisma.abstractForm.findMany({
      where: {
        userId: userId
      }
    });
    res.status(200).json(submissions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
