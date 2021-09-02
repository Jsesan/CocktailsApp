const CocktailItem = (props) => {
  return (
    <li>
      <h3>{props.title}</h3>
      <ul>
        {props.ingredients.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </li>
  );
};

export default CocktailItem;
