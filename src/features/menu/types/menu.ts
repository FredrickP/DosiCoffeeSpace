export type MenuCategory =
  | "signature"
  | "espresso"
  | "manual-brew"
  | "non-coffee"
  | "food";

export type MenuBadge =
  | "Signature"
  | "Best Seller"
  | "Recommended"
  | "New";

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image: string;
  badge?: MenuBadge;
  isAvailable: boolean;
}

export interface MenuCategoryOption {
  id: MenuCategory | "all";
  label: string;
}