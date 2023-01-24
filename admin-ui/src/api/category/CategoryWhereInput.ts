import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CategoryWhereInput = {
  categoryIconPath?: StringNullableFilter;
  displayMode?: StringFilter;
  id?: StringFilter;
  image?: StringFilter;
  lft?: IntFilter;
  parentId?: IntNullableFilter;
  position?: IntFilter;
  rgt?: IntNullableFilter;
  status?: IntFilter;
};
