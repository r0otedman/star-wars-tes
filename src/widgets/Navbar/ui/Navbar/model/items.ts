import { RoutePath } from "shared/config/routeConfig";

export interface NavbarItemType {
  path: string;
  text: string;
}

export const NavbarItemList: NavbarItemType[] = [
  { path: RoutePath.home_page, text: "Trading" },
  { path: RoutePath.home_page, text: "Pulse" },
  { path: RoutePath.home_page, text: "Fundamentals" },
  { path: RoutePath.home_page, text: "Trading Portfolio" },
  { path: RoutePath.home_page, text: "Earn" },
  { path: RoutePath.profile, text: "Profile" },
  { path: RoutePath.home_page, text: "Rewards" },
];
