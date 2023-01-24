import { RoleCreateNestedManyWithoutUserRolesInput } from "./RoleCreateNestedManyWithoutUserRolesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserRoleCreateInput = {
  roles?: RoleCreateNestedManyWithoutUserRolesInput;
  user?: UserWhereUniqueInput | null;
};
