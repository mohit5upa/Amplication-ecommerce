import { RoleUpdateManyWithoutUserRolesInput } from "./RoleUpdateManyWithoutUserRolesInput";
import { UserUpdateManyWithoutUserRolesInput } from "./UserUpdateManyWithoutUserRolesInput";

export type UserRoleUpdateInput = {
  role?: RoleUpdateManyWithoutUserRolesInput;
  user?: UserUpdateManyWithoutUserRolesInput;
};
