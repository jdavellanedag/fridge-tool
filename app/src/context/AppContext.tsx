import { createContext } from "react";
import { AppState } from "../data/AppState";
import { Ingredient } from "../data/Data";

type ContextProps = {
  state: AppState;
  addItem: (item: Ingredient) => void;
};

export const AppContext = createContext({} as ContextProps);
