import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
  SelectInput,
  BooleanInput,
  PasswordInput,
  SelectArrayInput,
  ReferenceInput,
} from "react-admin";

import { UserRoleTitle } from "../userRole/UserRoleTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="apiToken" source="apiToken" />
        <NumberInput
          step={1}
          label="customerGroupId"
          source="customerGroupId"
        />
        <DateTimeInput label="dob" source="dob" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <SelectInput
          source="gender"
          label="Gender"
          choices={[
            { label: "male", value: "Male" },
            { label: "female", value: "Female" },
            { label: "other", value: "Other" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Image" source="image" />
        <BooleanInput label="isSuspended" source="isSuspended" />
        <BooleanInput label="isVerified" source="isVerified" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Mobile Number" source="mobileNumber" />
        <PasswordInput label="Password" source="password" />
        <TextInput label="rememberToken" source="rememberToken" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <BooleanInput label="status" source="status" />
        <TextInput label="token" source="token" />
        <TextInput label="Username" source="username" />
        <ReferenceInput
          source="userrole.id"
          reference="UserRole"
          label="UserRoles"
        >
          <SelectInput optionText={UserRoleTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
