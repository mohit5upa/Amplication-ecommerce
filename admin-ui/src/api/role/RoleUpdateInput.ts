import { UserRoleWhereUniqueInput } from "../userRole/UserRoleWhereUniqueInput";

export type RoleUpdateInput = {
  roleDescription?: string;
  roleName?: string;
  userRole?: UserRoleWhereUniqueInput | null;
};
