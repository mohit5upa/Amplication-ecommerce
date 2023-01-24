import { Role } from "../role/Role";
import { User } from "../user/User";

export type UserRole = {
  createdAt: Date;
  id: string;
  role?: Array<Role>;
  updatedAt: Date;
  user?: Array<User>;
};
