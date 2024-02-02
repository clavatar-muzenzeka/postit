import {z} from "zod";

export const postValidationSchema = z.object({
  title: z.string(),
  body: z.string(),
  id: z.number().optional(),
  _id: z.string().optional(),
  userId: z.union([z.number(), z.string()]),
});

export const postsArrayValidationSchema = z.array(postValidationSchema);