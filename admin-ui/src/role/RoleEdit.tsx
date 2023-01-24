import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserRoleTitle } from "../userRole/UserRoleTitle";

export const RoleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="roleDescription" multiline source="roleDescription" />
        <TextInput label="roleName" source="roleName" />
        <ReferenceInput
          source="userrole.id"
          reference="UserRole"
          label="userRoles"
        >
          <SelectInput optionText={UserRoleTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
