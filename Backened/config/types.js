import z from "zod";

export const registerInput = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
  phone: z.string().max(12),
  organization: z.string().max(50),
  place: z.string(),
  address: z.string(),
  screenshot: z.string(),
});

export const signInInput = z.object({
  email: z.string().email(),
  password: z.string(),
});
export const createAbstract = z.object({
  title: z.string(),
  authors: z.string(),
  abstract: z.string(),
  keywords: z.string(),
  preferredPresentation: z.enum(["oral", "poster"]).default("oral"),
  conferenceTheme: z.string(),
  conflictOfInterest: z.enum(["no", "yes"]).default("no"),
});
