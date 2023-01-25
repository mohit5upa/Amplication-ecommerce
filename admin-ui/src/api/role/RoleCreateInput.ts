import { UserRoleWhereUniqueInput } from "../userRole/UserRoleWhereUniqueInput";

export type RoleCreateInput = {
  roleDescription: string;
  roleName: string;
  userRoles?: UserRoleWhereUniqueInput | null;
};
