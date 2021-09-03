import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button";
import Input from "../UI/Input";
import "./LoginForm.css";
import { loginAction } from "../../store/login-slice";

const LoginForm = (props) => {
  const dispatch = useDispatch();
  const [credentialsWrong, setCredentialsWrong] = useState(false);
  const usernameValid = useSelector((state) => state.login.usernameIsValid);
  const passValid = useSelector((state) => state.login.passwordIsValid);
  const userNameValue = useSelector((state) => state.login.userName);
  const passValue = useSelector((state) => state.login.pass);

  const formValid = usernameValid && passValid;

  async function fetchUser(user, pass) {
    const res = await fetch(
      "https://react-http-7db00-default-rtdb.firebaseio.com/users/" +
        user +
        ".json"
    );

    if (!res.ok) throw new Error("oh.. :(");
    const data = await res.json();
    if (data != null && pass === data["pass"]) {
      console.log("login piola");
      // const favorites = data["favorites"];
      // if (favorites != null) {
      const usersFavorites = [];
      //   favorites.forEach((element) => {
      //     const cocktailFavorite = {
      //       //get cocktail info
      //     };
      //     usersFavorites.push(cocktailFavorite);
      //   });
      //   return usersFavorites;
      //}
      return { ok: true, fav: usersFavorites };
    } else {
      return { ok: false, fav: [] };
    }
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!formValid) {
      console.log("not valid");
      return;
    }
    const user = await fetchUser(userNameValue, passValue);
    console.log(user.ok);
    if (user.ok) {
      dispatch(loginAction.login());
    } else {
      setCredentialsWrong(true);
    }
    //if user dont exist post it here
    //else bring user favorites
    console.log("login");
  };

  return (
    <div className="form">
      <p>Please Login to continue...</p>
      <form onSubmit={submitHandler}>
        <Input
          label="Username"
          id="username"
          validationFunction={props.validation}
          type="text"
          errorText="please enter a valid user name (5 >= char)"
        />
        <Input
          label="Password"
          id="pass"
          validationFunction={props.validation}
          type="password"
          errorText="password invalid"
        />
        {credentialsWrong && (
          <p className="error-text">username or password wrong</p>
        )}
        <Button text="Login" />
      </form>
    </div>
  );
};

export default LoginForm;
