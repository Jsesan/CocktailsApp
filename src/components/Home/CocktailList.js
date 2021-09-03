import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListItem from "./ListItem";
import "./CocktailList.css";

const CocktailList = () => {
  const cocktailItems = useSelector((state) => state.cocktail.items);

  return (
    <section className="list">
      <h2>Results:</h2>
      {cocktailItems && (
        <ul>
          {cocktailItems.map((item) => (
            <ListItem key={item.id} item={item} />
          ))}
        </ul>
      )}
      {!cocktailItems && <p>No results yet</p>}
    </section>
  );
};

export default CocktailList;
