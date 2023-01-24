import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProductCategoryWhereInput = {
  categoryId?: IntNullableFilter;
  id?: StringFilter;
  productId?: IntNullableFilter;
};
