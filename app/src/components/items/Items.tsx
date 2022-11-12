import { useEffect, useState } from "react";

import { useGetIngredient } from "../../hooks/useGetIngredient";
import { Item } from "./Item";

export const Items = () => {
  const [loadItems, setLoadItems] = useState(false);
  const { getIngredientList, data } = useGetIngredient();

  useEffect(() => {
    getIngredientList();
  }, []);

  return (
    <div className="items">
      <div className="items-item">
        <input
          type="text"
          placeholder="Nombre..."
          onFocus={() => setLoadItems(true)}
          /* onBlur={() => setLoadItems(false)} */
        />
      </div>
      {loadItems && data.map((ingredient) => <Item key={ingredient.id} ingredient={ingredient} />)}
    </div>
  );
};
