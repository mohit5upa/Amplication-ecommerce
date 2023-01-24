import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type OrderWhereInput = {
  discount?: FloatNullableFilter;
  id?: StringFilter;
  product?: ProductWhereUniqueInput;
  quantity?: IntFilter;
  totalPrice?: IntFilter;
  user?: UserListRelationFilter;
};
