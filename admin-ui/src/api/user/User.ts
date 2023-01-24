import { JsonValue } from "type-fest";

export type User = {
  apiToken: string | null;
  createdAt: Date;
  customerGroupId: number | null;
  dob: Date | null;
  email: string;
  firstName: string | null;
  gender?: Array<"Male" | "Female" | "Other">;
  id: string;
  image: string | null;
  isSuspended: boolean | null;
  isVerified: boolean | null;
  lastName: string | null;
  mobileNumber: string;
  rememberToken: string | null;
  roles: JsonValue;
  status: boolean | null;
  token: string | null;
  updatedAt: Date;
  username: string;
};
