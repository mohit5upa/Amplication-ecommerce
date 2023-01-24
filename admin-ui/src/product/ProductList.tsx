import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ProductList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"products"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="attribute_family_id" source="attributeFamilyId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="parent_id" source="parentId" />
        <TextField label="sku" source="sku" />
        <TextField label="types" source="types" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
