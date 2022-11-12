import { AppState } from "../data/AppState";
import { Ingredient } from "../data/Data";

type AppAction = {
  type: "addItem";
  payload: Ingredient;
};

export const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case "addItem":
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };

    default:
      return state;
  }
};
