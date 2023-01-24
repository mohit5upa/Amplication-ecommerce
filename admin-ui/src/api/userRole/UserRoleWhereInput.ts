import { StringFilter } from "../../util/StringFilter";
import { RoleListRelationFilter } from "../role/RoleListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type UserRoleWhereInput = {
  id?: StringFilter;
  role?: RoleListRelationFilter;
  user?: UserListRelationFilter;
};
