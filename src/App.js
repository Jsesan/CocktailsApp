import { Fragment } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import LoginForm from "./components/Login/LoginForm";
import Header from "./components/UI/Header";
import CocktailFinder from "./components/Home/CocktailFinder";
import CocktailList from "./components/Home/CocktailList";

function App() {
  const validation = (userName) => {
    return userName.trim().length >= 5;
  };

  const loggedIn = useSelector((state) => state.login.loggedIn);

  return (
    <div className="app">
      <Header />
      {!loggedIn && <LoginForm validation={validation} />}
      {loggedIn && <CocktailFinder />}
      {loggedIn && <CocktailList />}
    </div>
  );
}

export default App;
