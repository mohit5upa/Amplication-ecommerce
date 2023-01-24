import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CustomerGroupEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="code" source="code" />
        <NumberInput step={1} label="isUserDefined" source="isUserDefined" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
