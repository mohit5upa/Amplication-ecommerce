import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";

export type CustomerGroupWhereInput = {
  code?: StringNullableFilter;
  id?: StringFilter;
  isUserDefined?: IntFilter;
  name?: StringNullableFilter;
};
