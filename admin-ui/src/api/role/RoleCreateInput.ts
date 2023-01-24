import { UserRoleCreateNestedManyWithoutRolesInput } from "./UserRoleCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  roleDescription: string;
  roleName: string;
  userRoles?: UserRoleCreateNestedManyWithoutRolesInput;
};
