import { RoleCreateNestedManyWithoutUserRolesInput } from "./RoleCreateNestedManyWithoutUserRolesInput";
import { UserCreateNestedManyWithoutUserRolesInput } from "./UserCreateNestedManyWithoutUserRolesInput";

export type UserRoleCreateInput = {
  role?: RoleCreateNestedManyWithoutUserRolesInput;
  user?: UserCreateNestedManyWithoutUserRolesInput;
};
