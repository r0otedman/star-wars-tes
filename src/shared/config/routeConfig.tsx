import { Navigate, RouteProps } from "react-router-dom";
import { HomePage } from "../../pages/HomePage";
import { ProfilePage } from "../../pages/ProfilePage";
import { TokenPage } from "../../pages/TokenPage";

export enum AppRoutes {
  HOME_PAGE = "home_page",
  PROFILE = "profile",
  TOKEN = "token",
  DEFAULT = "default",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME_PAGE]: "/",
  [AppRoutes.PROFILE]: "/profile",
  [AppRoutes.TOKEN]: "/token/:mint",
  [AppRoutes.DEFAULT]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME_PAGE]: {
    path: RoutePath.home_page,
    element: <HomePage />,
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
  },
  [AppRoutes.TOKEN]: {
    path: RoutePath.token,
    element: <TokenPage />,
  },
  [AppRoutes.DEFAULT]: {
    path: RoutePath.default,
    element: <Navigate to="/" replace />,
  },
};
