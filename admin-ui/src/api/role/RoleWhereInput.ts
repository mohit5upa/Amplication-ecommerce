import { StringFilter } from "../../util/StringFilter";
import { UserRoleWhereUniqueInput } from "../userRole/UserRoleWhereUniqueInput";

export type RoleWhereInput = {
  id?: StringFilter;
  roleDescription?: StringFilter;
  roleName?: StringFilter;
  userRoles?: UserRoleWhereUniqueInput;
};
