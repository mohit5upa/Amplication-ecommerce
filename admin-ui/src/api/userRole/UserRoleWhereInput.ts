import { StringFilter } from "../../util/StringFilter";
import { RoleListRelationFilter } from "../role/RoleListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserRoleWhereInput = {
  id?: StringFilter;
  roles?: RoleListRelationFilter;
  user?: UserWhereUniqueInput;
};
