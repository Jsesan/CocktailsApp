import { useDispatch, useSelector } from "react-redux";
import { cocktailAction } from "../../store/cocktail-slice";
import "./CocktailFinder.css";

const CocktailFinder = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.cocktail.cocktailToFind);

  async function fetchCocktails(value) {
    const res = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + value
    );

    if (!res.ok) throw new Error("oh.. :(");

    const data = await res.json();
    console.log(data);
    const drinks = data["drinks"];
    if(drinks!=null){
      const cocktails = [];
      drinks.forEach(element => {
        const cocktail = {
          title: element.strDrink,
          ingr1: element.strIngredient1,
          ingr2: element.strIngredient2,
          ingr3: element.strIngredient3,
          ingr4: element.strIngredient4,
          img: element.strImageSource
        };
        cocktails.push(cocktail);
      });

      return cocktails;
    }
  }

  const submitSearch = async (event) => {
    event.preventDefault();
    const items = await fetchCocktails(value);
    //console.log("items:" + items[0].title);
    dispatch(cocktailAction.setCocktailsItems(items))
  };

  const finderHandler = (event) => {
    dispatch(cocktailAction.setCocktailToFind(event.target.value));
  };

  return (
    <div className="finder-control">
      <form className="finder" onSubmit={submitSearch}>
        <input
          id="finder"
          type="search"
          placeholder="Find cocktails here..."
          onChange={finderHandler}
        ></input>
        <button>
          <a>Salute!</a>
        </button>
      </form>
    </div>
  );
};

export default CocktailFinder;
