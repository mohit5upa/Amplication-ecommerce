import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserCreateNestedManyWithoutOrdersInput } from "./UserCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  discount?: number | null;
  product: ProductWhereUniqueInput;
  quantity: number;
  totalPrice: number;
  user?: UserCreateNestedManyWithoutOrdersInput;
};
