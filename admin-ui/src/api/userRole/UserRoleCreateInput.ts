import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserRoleCreateInput = {
  roleId: RoleWhereUniqueInput | null;
  userId: UserWhereUniqueInput;
};
