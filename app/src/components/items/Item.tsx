import { IoMdAdd } from "react-icons/io";
import Tomato from "../../assets/tomato.svg";
import { Ingredient } from "../../data/Data";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

interface Props {
  ingredient: Ingredient;
}

export const Item = ({ ingredient }: Props) => {
  const { addItem } = useContext(AppContext);

  const handleClick = () => {
    console.log(ingredient);
    addItem(ingredient);
  };
  return (
    <div className="items-result">
      <div className="items-result-img icon">
        <img src={Tomato} alt={ingredient.name} />
      </div>
      <div className="items-result-name">{ingredient.name}</div>
      <button className="btn btn--primary" onClick={handleClick}>
        <IoMdAdd />
      </button>
    </div>
  );
};
