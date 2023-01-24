import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  apiToken?: string | null;
  customerGroupId?: number | null;
  dob?: Date | null;
  email: string;
  firstName?: string | null;
  gender?: Array<"Male" | "Female" | "Other">;
  image?: string | null;
  isSuspended?: boolean | null;
  isVerified?: boolean | null;
  lastName?: string | null;
  mobileNumber: string;
  password: string;
  rememberToken?: string | null;
  roles: InputJsonValue;
  status?: boolean | null;
  token?: string | null;
  username: string;
};
