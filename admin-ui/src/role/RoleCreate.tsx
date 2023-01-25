import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserRoleTitle } from "../userRole/UserRoleTitle";

export const RoleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="roleDescription" multiline source="roleDescription" />
        <TextInput label="roleName" source="roleName" />
        <ReferenceInput
          source="userrole.id"
          reference="UserRole"
          label="UserRoles"
        >
          <SelectInput optionText={UserRoleTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
