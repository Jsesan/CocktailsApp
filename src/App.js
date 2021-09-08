import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import LoginForm from "./components/Login/LoginForm";
import Header from "./components/UI/Header";
import CocktailFinder from "./components/Home/CocktailFinder";
import CocktailList from "./components/Home/CocktailList";
import Modal from "./components/UI/Modal";
import { uiAction } from "./store/ui-slice";
import CocktailItem from "./components/Home/CocktailItem";
import Favorites from "./components/Home/Favorites";

import { fetchFavData, sendFavData } from "./store/ui-actions";

let isInitial = true;

function App() {
  const validation = (userName) => {
    return userName.trim().length >= 5;
  };

  const dispatch = useDispatch();

  const loggedIn = useSelector((state) => state.login.loggedIn);
  const showItem = useSelector((state) => state.ui.openItemList);
  const itemToShow = useSelector((state) => state.ui.itemList);
  const showList = useSelector((state) => state.ui.showFinder);
  const showFavs = useSelector((state) => state.ui.showFavs);
  const favsChange = useSelector((state) => state.ui.favsChange);
  const user = useSelector((state) => state.login.userName);
  const favs = useSelector((state) => state.ui.favs);

  const closeBackdropOfItem = () => {
    dispatch(uiAction.clickItemList());
  };

  const closeBackdropOfFavs = () => {
    dispatch(uiAction.showFavs());
  };

  useEffect(() => {
    dispatch(fetchFavData(user));
  }, [dispatch, user]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    console.log("useEffect");
    if (favsChange) {
      console.log("executing this: " + user);
      dispatch(sendFavData(user, favs));
      dispatch(uiAction.setFavsChangeToFalse());
    }
  }, [favsChange, user, favs, dispatch]);

  return (
    <div className="app">
      <Header />
      {!loggedIn && <LoginForm validation={validation} />}
      {loggedIn && <CocktailFinder />}
      {loggedIn && showList && <CocktailList />}
      {showItem && (
        <Modal onClick={closeBackdropOfItem}>
          <CocktailItem item={itemToShow} />
        </Modal>
      )}
      {showFavs && (
        <Modal onClick={closeBackdropOfFavs}>
          <Favorites />
        </Modal>
      )}
    </div>
  );
}

export default App;
