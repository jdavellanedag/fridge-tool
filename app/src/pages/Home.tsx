import Tomato from "../assets/tomato.svg";
import { Items } from "../components/items/Items";

export const Home = () => {
  return (
    <>
      <nav>
        <div>Fridge Tool</div>
      </nav>
      <main>
        <Items />
      </main>
      <div className="wrapper bg-2">
        <div className="fridge">
          <h3 className="fridge-title">Items</h3>
          <div className="fridge-content">
            <div className="fridge-item icon">
              <img src={Tomato} alt="Tomato" />
            </div>
          </div>
          <button className="btn btn--primary">Generate</button>
        </div>
      </div>
      <div className="wrapper bg-1">
        <div className="recipe">
          <h3 className="recipe-title mb-1">Recipe</h3>
          <div className="recipe-list">
            <div className="recipe-item bg-2">
              <div className="recipe-item-img icon">
                <img src={Tomato} alt="Tomato" />
              </div>
              <div className="recipe-item-data">
                <div className="recipe-item-title">Tomato soup</div>
                <div className="recipe-item-description">
                  A delicious tomato soup which can be done in 10 min. Easy but tasty
                </div>
              </div>
            </div>
            <div className="recipe-item bg-2">
              <div className="recipe-item-img icon">
                <img src={Tomato} alt="Tomato" />
              </div>
              <div className="recipe-item-data">
                <div className="recipe-item-title">Tomato soup</div>
                <div className="recipe-item-description">
                  A delicious tomato soup which can be done in 10 min. Easy but tasty
                </div>
              </div>
            </div>
            <div className="recipe-item bg-2">
              <div className="recipe-item-img icon">
                <img src={Tomato} alt="Tomato" />
              </div>
              <div className="recipe-item-data">
                <div className="recipe-item-title">Tomato soup</div>
                <div className="recipe-item-description">
                  A delicious tomato soup which can be done in 10 min. Easy but tasty
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-3">Footer</footer>
    </>
  );
};
