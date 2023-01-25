import { JsonValue } from "type-fest";
import { UserRole } from "../userRole/UserRole";

export type User = {
  apiToken: string | null;
  createdAt: Date;
  customerGroupId: number | null;
  dob: Date | null;
  email: string;
  firstName: string | null;
  gender?: "Male" | "Female" | "Other" | null;
  id: string;
  image: string | null;
  isSuspended: boolean | null;
  isVerified: boolean | null;
  lastName: string | null;
  mobileNumber: string | null;
  rememberToken: string | null;
  roles: JsonValue;
  status: number;
  token: string | null;
  updatedAt: Date;
  username: string;
  userRoles?: Array<UserRole>;
};
