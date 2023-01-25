import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { UserRoleWhereUniqueInput } from "../userRole/UserRoleWhereUniqueInput";

export type UserWhereInput = {
  apiToken?: StringNullableFilter;
  customerGroupId?: IntNullableFilter;
  dob?: DateTimeNullableFilter;
  email?: StringFilter;
  firstName?: StringNullableFilter;
  gender?: "Male" | "Female" | "Other";
  id?: StringFilter;
  image?: StringNullableFilter;
  isSuspended?: BooleanNullableFilter;
  isVerified?: BooleanNullableFilter;
  lastName?: StringNullableFilter;
  mobileNumber?: StringNullableFilter;
  rememberToken?: StringNullableFilter;
  status?: BooleanFilter;
  token?: StringNullableFilter;
  username?: StringFilter;
  userRoles?: UserRoleWhereUniqueInput;
};
