import { prisma } from "../config/prisma.js";

export const submitAbstract = async (req, res) => {
  const { title, authors, abstract, keywords, preferredPresentation, conferenceTheme, conflictOfInterest } = req.body;
  const userId = req.user.user.id;
  console.log(userId)

  if (!title || !authors || !abstract) {
    return res.status(400).json({ error: 'Title, Authors, and Abstract are required.' });
  }

  try {
    const newSubmission = await prisma.abstractForm.create({
      data: {
        userId: userId,
        title,
        authors,
        abstract,
        keywords,
        preferredPresentation,
        conferenceTheme,
        conflictOfInterest
      }
    });

    res.status(201).json({ message: 'Abstract submitted successfully!', data: newSubmission });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


export const getSubmissions = async (req, res) => {
  try {
    const submissions = await prisma.abstractForm.findMany();
    res.status(200).json(submissions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
