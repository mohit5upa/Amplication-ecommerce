import { RoleUpdateManyWithoutUserRolesInput } from "./RoleUpdateManyWithoutUserRolesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserRoleUpdateInput = {
  roles?: RoleUpdateManyWithoutUserRolesInput;
  user?: UserWhereUniqueInput | null;
};
