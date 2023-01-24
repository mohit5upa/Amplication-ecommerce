import { Role } from "../role/Role";
import { User } from "../user/User";

export type UserRole = {
  createdAt: Date;
  id: string;
  roleId?: Role | null;
  updatedAt: Date;
  userId?: User;
};
