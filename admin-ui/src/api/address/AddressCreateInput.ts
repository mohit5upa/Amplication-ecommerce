import { UserCreateNestedManyWithoutAddressesInput } from "./UserCreateNestedManyWithoutAddressesInput";

export type AddressCreateInput = {
  address_1: string;
  address_2?: string | null;
  city: string;
  state: string;
  user?: UserCreateNestedManyWithoutAddressesInput;
  zip?: number | null;
};
