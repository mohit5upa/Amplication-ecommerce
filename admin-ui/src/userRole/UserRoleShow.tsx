import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USERROLE_TITLE_FIELD } from "./UserRoleTitle";

export const UserRoleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Role" target="UserRoleId" label="roles">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="roleDescription" source="roleDescription" />
            <TextField label="roleName" source="roleName" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="userRoles"
              source="userrole.id"
              reference="UserRole"
            >
              <TextField source={USERROLE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
