// controllers/abstractController.js

import AbstractSubmission from '../models/abstractSubmission.js';

// Handle abstract submission
export const submitAbstract = async (req, res) => {
  const { title, authors, abstract, keywords, preferredPresentation, conferenceTheme, conflictOfInterest } = req.body;

  // Validate required fields
  if (!title || !authors || !abstract) {
    return res.status(400).json({ error: 'Title, Authors, and Abstract are required.' });
  }

  try {
    // Create a new abstract submission document
    const newSubmission = new AbstractSubmission({
      title,
      authors,
      abstract,
      keywords,
      preferredPresentation,
      conferenceTheme,
      conflictOfInterest,
    });

    // Save the submission to the database
    await newSubmission.save();
    res.status(201).json({ message: 'Abstract submitted successfully!', data: newSubmission });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all submissions (optional)
export const getSubmissions = async (req, res) => {
  try {
    const submissions = await AbstractSubmission.find();
    res.status(200).json(submissions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
