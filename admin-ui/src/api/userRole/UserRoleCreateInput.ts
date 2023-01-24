import { RoleCreateNestedManyWithoutUserRolesInput } from "./RoleCreateNestedManyWithoutUserRolesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserRoleCreateInput = {
  roleId?: RoleCreateNestedManyWithoutUserRolesInput;
  userId: UserWhereUniqueInput;
};
