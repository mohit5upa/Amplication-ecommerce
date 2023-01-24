import { SortOrder } from "../../util/SortOrder";

export type RoleOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  roleDescription?: SortOrder;
  roleName?: SortOrder;
  updatedAt?: SortOrder;
  userRoleId?: SortOrder;
};
