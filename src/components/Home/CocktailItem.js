import "./CocktailItem.css";

const CocktailItem = (props) => {
  return (
    <div>
      <h3>{props.item.title}</h3>
      <div className="cocktails-item-info">
        <ul>
          {props.item.ingr1 && <li>{props.item.ingr1}</li>}
          {props.item.ingr2 && <li>{props.item.ingr2}</li>}
          {props.item.ingr3 && <li>{props.item.ingr3}</li>}
          {props.item.ingr4 && <li>{props.item.ingr4}</li>}
        </ul>
        <img src={props.item.img} alt="img of the cocktail" />
      </div>
    </div>
  );
};

export default CocktailItem;
