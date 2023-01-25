import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { USERROLE_TITLE_FIELD } from "../userRole/UserRoleTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="apiToken" source="apiToken" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="customerGroupId" source="customerGroupId" />
        <TextField label="dob" source="dob" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Gender" source="gender" />
        <TextField label="ID" source="id" />
        <TextField label="Image" source="image" />
        <BooleanField label="isSuspended" source="isSuspended" />
        <BooleanField label="isVerified" source="isVerified" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Mobile Number" source="mobileNumber" />
        <TextField label="rememberToken" source="rememberToken" />
        <TextField label="Roles" source="roles" />
        <BooleanField label="status" source="status" />
        <TextField label="token" source="token" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceField
          label="UserRoles"
          source="userrole.id"
          reference="UserRole"
        >
          <TextField source={USERROLE_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
