import { Role } from "../role/Role";
import { User } from "../user/User";

export type UserRole = {
  createdAt: Date;
  id: string;
  roleId?: Array<Role>;
  updatedAt: Date;
  userId?: User;
};
