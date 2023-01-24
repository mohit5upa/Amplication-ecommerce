import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CategoryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"categories"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="categoryIconPath" source="categoryIconPath" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="displayMode" source="displayMode" />
        <TextField label="ID" source="id" />
        <TextField label="image" source="image" />
        <TextField label="lft" source="lft" />
        <TextField label="parentId" source="parentId" />
        <TextField label="position" source="position" />
        <TextField label="rgt" source="rgt" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
