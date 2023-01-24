import { RoleUpdateManyWithoutUserRolesInput } from "./RoleUpdateManyWithoutUserRolesInput";
import { UserUpdateManyWithoutUserRolesInput } from "./UserUpdateManyWithoutUserRolesInput";

export type UserRoleUpdateInput = {
  roles?: RoleUpdateManyWithoutUserRolesInput;
  user?: UserUpdateManyWithoutUserRolesInput;
};
