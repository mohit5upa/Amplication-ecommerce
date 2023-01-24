import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  attributeFamilyId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  parentId?: SortOrder;
  sku?: SortOrder;
  types?: SortOrder;
  updatedAt?: SortOrder;
};
