import { Product as TProduct } from "../api/product/Product";

export const PRODUCT_TITLE_FIELD = "sku";

export const ProductTitle = (record: TProduct): string => {
  return record.sku || String(record.id);
};
