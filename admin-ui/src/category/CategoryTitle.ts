import { Category as TCategory } from "../api/category/Category";

export const CATEGORY_TITLE_FIELD = "categoryIconPath";

export const CategoryTitle = (record: TCategory): string => {
  return record.categoryIconPath || String(record.id);
};
