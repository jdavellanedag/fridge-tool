import { useReducer } from "react";
import { AppState } from "../data/AppState";

import { appReducer } from "./AppReducer";
import { AppContext } from "./AppContext";
import { Ingredient } from "../data/Data";

interface TodoProviderProps {
  children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: AppState = {
  ingredients: [],
};

export const AppProvider = ({ children }: TodoProviderProps) => {
  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);

  const addItem = (item: Ingredient) => {
    dispatch({ type: "addItem", payload: item });
  };

  return <AppContext.Provider value={{ state, addItem }}>{children}</AppContext.Provider>;
};
