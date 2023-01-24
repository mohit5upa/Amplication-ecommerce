export type CategoryCreateInput = {
  categoryIconPath?: string | null;
  displayMode: string;
  image: string;
  lft: number;
  parentId?: number | null;
  position: number;
  rgt?: number | null;
  status: number;
};
