import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
        <TextField label="status" source="status" />
        <TextField label="token" source="token" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
      </Datagrid>
    </List>
  );
};
