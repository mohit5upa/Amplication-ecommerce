import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserUpdateManyWithoutOrdersInput } from "./UserUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  discount?: number | null;
  product?: ProductWhereUniqueInput;
  quantity?: number;
  totalPrice?: number;
  user?: UserUpdateManyWithoutOrdersInput;
};
