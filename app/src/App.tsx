import { Home } from "./pages/Home";
import "./styles/styles.scss";
import { AppProvider } from "./context/AppProvider";

const App = () => {
  return (
    <>
      <AppProvider>
        <Home></Home>
      </AppProvider>
    </>
  );
};

export default App;
