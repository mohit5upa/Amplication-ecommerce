import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

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
  mobileNumber?: StringFilter;
  rememberToken?: StringNullableFilter;
  status?: BooleanNullableFilter;
  token?: StringNullableFilter;
  username?: StringFilter;
};
