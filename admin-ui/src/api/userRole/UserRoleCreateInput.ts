import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { UserCreateNestedManyWithoutUserRolesInput } from "./UserCreateNestedManyWithoutUserRolesInput";

export type UserRoleCreateInput = {
  role?: RoleWhereUniqueInput | null;
  user?: UserCreateNestedManyWithoutUserRolesInput;
};
