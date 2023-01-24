import { UserRoleUpdateManyWithoutRolesInput } from "./UserRoleUpdateManyWithoutRolesInput";

export type RoleUpdateInput = {
  roleDescription?: string;
  roleName?: string;
  userRoles?: UserRoleUpdateManyWithoutRolesInput;
};
