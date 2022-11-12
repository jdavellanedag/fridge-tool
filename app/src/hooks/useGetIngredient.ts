import { useState } from "react";
import { Ingredient } from "../data/Data";

const URL = `${import.meta.env.VITE_BACKEND}/ingredient`;

const INITIAL_DATA: Ingredient[] = [];

export const useGetIngredient = () => {
  const [data, setData] = useState<Ingredient[]>(INITIAL_DATA);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const getIngredientList = async () => {
    try {
      const response = await fetch(URL);
      let responseData = await response.json();
      setData(responseData);
    } catch (error) {
      setError("Error");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    getIngredientList,
    data,
    error,
    isLoading,
  };
};
