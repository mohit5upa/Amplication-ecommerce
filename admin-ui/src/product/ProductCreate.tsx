import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
