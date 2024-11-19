import mongoose from 'mongoose';

const AbstractSubmissionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    authors: { type: String, required: true },
    abstract: { type: String, required: true },
    keywords: { type: String },
    preferredPresentation: { type: String, enum: ['oral', 'poster', 'other'], default: 'oral' },
    conferenceTheme: { type: String },
    conflictOfInterest: { type: String, enum: ['yes', 'no'], default: 'no' },
  },
  { timestamps: true }
);

const AbstractSubmission = mongoose.model('AbstractSubmission', AbstractSubmissionSchema);

export default AbstractSubmission;
