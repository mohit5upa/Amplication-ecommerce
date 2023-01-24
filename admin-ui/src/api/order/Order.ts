import { Product } from "../product/Product";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  discount: number | null;
  id: string;
  product?: Product;
  quantity: number;
  totalPrice: number;
  updatedAt: Date;
  user?: Array<User>;
};
