import { StringFilter } from "../../util/StringFilter";
import { UserRoleListRelationFilter } from "../userRole/UserRoleListRelationFilter";

export type RoleWhereInput = {
  id?: StringFilter;
  roleDescription?: StringFilter;
  roleName?: StringFilter;
  userRoles?: UserRoleListRelationFilter;
};
