import { InputJsonValue } from "../../types";
import { UserRoleUpdateManyWithoutUsersInput } from "./UserRoleUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  apiToken?: string | null;
  customerGroupId?: number | null;
  dob?: Date | null;
  email?: string;
  firstName?: string | null;
  gender?: "Male" | "Female" | "Other" | null;
  image?: string | null;
  isSuspended?: boolean | null;
  isVerified?: boolean | null;
  lastName?: string | null;
  mobileNumber?: string | null;
  password?: string;
  rememberToken?: string | null;
  roles?: InputJsonValue;
  status?: number;
  token?: string | null;
  username?: string;
  userRoles?: UserRoleUpdateManyWithoutUsersInput;
};
