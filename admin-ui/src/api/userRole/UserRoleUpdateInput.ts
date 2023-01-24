import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { UserUpdateManyWithoutUserRolesInput } from "./UserUpdateManyWithoutUserRolesInput";

export type UserRoleUpdateInput = {
  role?: RoleWhereUniqueInput | null;
  user?: UserUpdateManyWithoutUserRolesInput;
};
