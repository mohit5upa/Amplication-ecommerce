import { User } from "../user/User";

export type Address = {
  address_1: string;
  address_2: string | null;
  city: string;
  createdAt: Date;
  id: string;
  state: string;
  updatedAt: Date;
  user?: Array<User>;
  zip: number | null;
};
