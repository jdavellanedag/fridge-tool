import { IoMdAdd } from "react-icons/io";
import Tomato from "../../assets/tomato.svg";

export const Items = () => {
  return (
    <div className="items">
      <div className="items-item">
        <input type="text" placeholder="Nombre..." />
      </div>
      <div className="items-result">
        <div className="items-result-img icon">
          <img src={Tomato} alt="Tomato" />
        </div>
        <div className="items-result-name">Tomato</div>
        <button className="btn btn--primary">
          <IoMdAdd />
        </button>
      </div>
    </div>
  );
};
