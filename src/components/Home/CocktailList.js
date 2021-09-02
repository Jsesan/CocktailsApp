import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CocktailItem from "./CocktailItem";

const CocktailList = () => {
  const cocktailItems = useSelector((state) => state.cocktail.items);

  return (
    <div>
      <h2>Results:</h2>
      {cocktailItems && (
        <ul>
          {cocktailItems.map((item) => (
            <CocktailItem
              title={item.title}
              ingr1={item.ingr1}
              ingr2={item.ingr2}
              ingr3={item.ingr3}
              ingr4={item.ingr4}
            />
          ))}
        </ul>
      )}
      {!cocktailItems && <p>No results yet</p>}
    </div>
  );
};

export default CocktailList;
