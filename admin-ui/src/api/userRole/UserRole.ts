import { Role } from "../role/Role";
import { User } from "../user/User";

export type UserRole = {
  createdAt: Date;
  id: string;
  roles?: Array<Role>;
  updatedAt: Date;
  user?: User | null;
};
