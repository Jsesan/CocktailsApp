import "./Button.css";

const Button = (props) => {
  return (
    <div className="form-actions">
      <button>{props.text}</button>
    </div>
  );
};

export default Button;
