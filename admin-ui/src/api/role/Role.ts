import { UserRole } from "../userRole/UserRole";

export type Role = {
  createdAt: Date;
  id: string;
  roleDescription: string;
  roleName: string;
  updatedAt: Date;
  userRoles?: UserRole | null;
};
