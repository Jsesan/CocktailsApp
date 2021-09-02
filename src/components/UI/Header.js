import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../store/login-slice";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.login.loggedIn);

  const logoutHandler = () => {
    dispatch(loginAction.logout());
  };

  const showFavorites = () => {
    console.log("favorites...");
  };

  return (
    <header className="main-header">
      <h1>CocktailsApp</h1>
      <nav className="nav">
        <ul className="favs">
          {isLogged && (
            <li>
              <button onClick={showFavorites}>Favorites</button>
            </li>
          )}

          {isLogged && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
