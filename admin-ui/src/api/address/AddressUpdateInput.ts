import { UserUpdateManyWithoutAddressesInput } from "./UserUpdateManyWithoutAddressesInput";

export type AddressUpdateInput = {
  address_1?: string;
  address_2?: string | null;
  city?: string;
  state?: string;
  user?: UserUpdateManyWithoutAddressesInput;
  zip?: number | null;
};
