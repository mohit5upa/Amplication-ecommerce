import { RoleCreateNestedManyWithoutUserRolesInput } from "./RoleCreateNestedManyWithoutUserRolesInput";
import { UserCreateNestedManyWithoutUserRolesInput } from "./UserCreateNestedManyWithoutUserRolesInput";

export type UserRoleCreateInput = {
  roles?: RoleCreateNestedManyWithoutUserRolesInput;
  user?: UserCreateNestedManyWithoutUserRolesInput;
};
