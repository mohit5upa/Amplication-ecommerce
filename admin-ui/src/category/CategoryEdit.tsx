import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CategoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
