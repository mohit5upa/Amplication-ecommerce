import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";

export type UserRoleWhereInput = {
  id?: StringFilter;
  roleId?: IntFilter;
  userId?: IntFilter;
};
