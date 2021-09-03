import useInput from "../../hooks/use-input";
import "./Input.css";
import { useDispatch } from "react-redux";
import { loginAction } from "../../store/login-slice";

const Input = (props) => {
  const dispatch = useDispatch();

  const { value, isValid, hasError, valueChangeHandler, valueBlurHandler } =
    useInput(props.validationFunction);

  const inputClases = hasError ? "form-control invalid" : "form-control";

  if (props.id === "username" && isValid) {
    console.log("user valid");
    dispatch(loginAction.usernameInputIsValid(true));
    dispatch(loginAction.setUsername(value));
  } else if (props.id === "username" && !isValid) {
    dispatch(loginAction.usernameInputIsValid(false));
  }

  if (props.id === "pass" && isValid) {
    console.log("pass valid");
    dispatch(loginAction.passInputIsValid(true));
    dispatch(loginAction.setPass(value));
  } else if (props.id === "pass" && !isValid) {
    dispatch(loginAction.passInputIsValid(false));
  }

  return (
    <div className={inputClases}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        onChange={valueChangeHandler}
        onBlur={valueBlurHandler}
        value={value}
      />
      {hasError && <p className="error-text">{props.errorText}</p>}
    </div>
  );
};

export default Input;
