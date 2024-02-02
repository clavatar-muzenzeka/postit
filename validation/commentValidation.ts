import {z} from "zod";

export const commentValidationSchema = z.object({
  body: z.string(),
  id: z.number().optional(),
  _id: z.string().optional(),
  postId: z.union([z.number(), z.string()]),
  name: z.string().optional(),
  email: z.string().email().optional()
});