import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CocktailItem from "./CocktailItem";

const CocktailList = () => {
  const cocktailToFind = useSelector((state) => state.cocktail.cocktailToFind);

  const cocktailItems = [];

  return (
    <div>
      <h2>Results:</h2>
      <ul>
        {cocktailItems.map((item) => (
          <CocktailItem />
        ))}
      </ul>
    </div>
  );
};

export default CocktailList;
