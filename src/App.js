import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import LoginForm from "./components/Login/LoginForm";
import Header from "./components/UI/Header";
import CocktailFinder from "./components/Home/CocktailFinder";
import CocktailList from "./components/Home/CocktailList";
import Modal from "./components/UI/Modal";
import { uiAction } from "./store/ui-slice";
import CocktailItem from "./components/Home/CocktailItem";

function App() {
  const validation = (userName) => {
    return userName.trim().length >= 5;
  };

  const dispatch = useDispatch();

  const loggedIn = useSelector((state) => state.login.loggedIn);
  const showItem = useSelector((state) => state.ui.openItemList);
  const itemToShow = useSelector((state) => state.ui.itemList);
  const showList = useSelector((state) => state.ui.showFinder);

  const closeBackdrop = () => {
    dispatch(uiAction.clickItemList());
  };
  return (
    <div className="app">
      <Header />
      {!loggedIn && <LoginForm validation={validation} />}
      {loggedIn && <CocktailFinder />}
      {loggedIn && showList && <CocktailList />}
      {showItem && (
        <Modal onClick={closeBackdrop}>
          <CocktailItem item={itemToShow} />
        </Modal>
      )}
    </div>
  );
}

export default App;
