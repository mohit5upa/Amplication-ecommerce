import { RoleUpdateManyWithoutUserRolesInput } from "./RoleUpdateManyWithoutUserRolesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserRoleUpdateInput = {
  roleId?: RoleUpdateManyWithoutUserRolesInput;
  userId?: UserWhereUniqueInput;
};
