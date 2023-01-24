import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CategoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="categoryIconPath" source="categoryIconPath" />
        <TextInput label="displayMode" source="displayMode" />
        <TextInput label="image" source="image" />
        <NumberInput step={1} label="lft" source="lft" />
        <NumberInput step={1} label="parentId" source="parentId" />
        <NumberInput step={1} label="position" source="position" />
        <NumberInput step={1} label="rgt" source="rgt" />
        <NumberInput step={1} label="status" source="status" />
      </SimpleForm>
    </Create>
  );
};
