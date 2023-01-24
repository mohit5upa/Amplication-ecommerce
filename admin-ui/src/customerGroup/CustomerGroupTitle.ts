import { CustomerGroup as TCustomerGroup } from "../api/customerGroup/CustomerGroup";

export const CUSTOMERGROUP_TITLE_FIELD = "name";

export const CustomerGroupTitle = (record: TCustomerGroup): string => {
  return record.name || String(record.id);
};
