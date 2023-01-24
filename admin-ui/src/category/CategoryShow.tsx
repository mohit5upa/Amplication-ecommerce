import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CategoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
