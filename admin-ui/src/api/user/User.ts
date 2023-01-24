import { Address } from "../address/Address";
import { Order } from "../order/Order";
import { JsonValue } from "type-fest";

export type User = {
  addresses?: Array<Address>;
  createdAt: Date;
  email: string;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders?: Array<Order>;
  phone: string;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
