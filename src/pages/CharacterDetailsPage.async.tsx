import { lazy } from "react";

const CharacterDetailsPageAsync = lazy(() => import("./CharacterDetailsPage"));
export {
  CharacterDetailsPageAsync,
  CharacterDetailsPageAsync as CharacterDetailsPage,
};
