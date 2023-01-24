import { StringFilter } from "../../util/StringFilter";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type UserRoleWhereInput = {
  id?: StringFilter;
  role?: RoleWhereUniqueInput;
  user?: UserListRelationFilter;
};
