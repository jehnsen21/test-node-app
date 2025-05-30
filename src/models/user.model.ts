// // src/models/user.model.ts
// import { BaseModel } from "./base.model";

// export interface User extends BaseModel {
//   name: string;
//   email: string;
//   role: string;
// }

// src/models/user.model.ts
import { z } from "zod";
import { BaseModel } from "./base.model";

export const UserSchema = z.object({
  id: z.string(),
  name: z.string().min(2),
  email: z.string().email(),
  role: z.enum(["admin", "user", "guest"]),
});

export type User = z.infer<typeof UserSchema> & BaseModel;
