import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button";
import Input from "../UI/Input";
import "./LoginForm.css";
import { loginAction } from "../../store/login-slice";

const LoginForm = (props) => {
  const dispatch = useDispatch();

  const usernameValid = useSelector((state) => state.login.usernameIsValid);
  const passValid = useSelector((state) => state.login.passwordIsValid);

  const formValid = usernameValid && passValid;

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formValid) {
      console.log("not valid");
      return;
    }
    dispatch(loginAction.login());
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
        <Button text="Login" />
      </form>
    </div>
  );
};

export default LoginForm;
