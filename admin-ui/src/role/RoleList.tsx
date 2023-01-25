import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USERROLE_TITLE_FIELD } from "../userRole/UserRoleTitle";

export const RoleList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"roles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="roleDescription" source="roleDescription" />
        <TextField label="roleName" source="roleName" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="UserRoles"
          source="userrole.id"
          reference="UserRole"
        >
          <TextField source={USERROLE_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
