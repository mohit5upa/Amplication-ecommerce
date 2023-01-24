import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="attribute_family_id"
          source="attributeFamilyId"
        />
        <NumberInput step={1} label="parent_id" source="parentId" />
        <TextInput label="sku" source="sku" />
        <TextInput label="types" source="types" />
      </SimpleForm>
    </Edit>
  );
};
