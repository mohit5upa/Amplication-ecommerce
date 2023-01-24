import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProductWhereInput = {
  attributeFamilyId?: IntFilter;
  id?: StringFilter;
  parentId?: IntFilter;
  sku?: StringFilter;
  types?: StringFilter;
};
