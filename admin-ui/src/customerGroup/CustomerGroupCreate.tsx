import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CustomerGroupCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="code" source="code" />
        <NumberInput step={1} label="isUserDefined" source="isUserDefined" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
