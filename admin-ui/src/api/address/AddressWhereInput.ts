import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type AddressWhereInput = {
  address_1?: StringFilter;
  address_2?: StringNullableFilter;
  city?: StringFilter;
  id?: StringFilter;
  state?: StringFilter;
  user?: UserListRelationFilter;
  zip?: IntNullableFilter;
};
