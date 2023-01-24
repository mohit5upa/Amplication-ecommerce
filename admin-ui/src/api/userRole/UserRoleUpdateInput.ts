import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserRoleUpdateInput = {
  roleId?: RoleWhereUniqueInput | null;
  userId?: UserWhereUniqueInput;
};
