const CocktailItem = (props) => {
  return (
    <li>
      <h3>{props.title}</h3>
      <ul>
        {props.ingr1 && <li>{props.ingr1}</li>}
        {props.ingr2 && <li>{props.ingr2}</li>}
        {props.ingr3 && <li>{props.ingr3}</li>}
        {props.ingr4 && <li>{props.ingr4}</li>}
      </ul>
    </li>
  );
};

export default CocktailItem;
