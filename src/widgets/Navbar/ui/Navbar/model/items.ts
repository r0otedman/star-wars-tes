import { RoutePath } from "shared/config/routeConfig";

export interface NavbarItemType {
  path: string;
  text: string;
}

export const NavbarItemList: NavbarItemType[] = [
  { path: RoutePath.home_page, text: "DEX" },
  { path: RoutePath.home_page, text: "Fundamentals" },
  { path: RoutePath.home_page, text: "Portfolio" },
  { path: RoutePath.home_page, text: "Earn" },
  { path: RoutePath.home_page, text: "Rewards" },
  { path: RoutePath.home_page, text: "AI" },
];
