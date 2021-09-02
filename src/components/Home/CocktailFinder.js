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
    return data["drinks"];
  }

  const submitSearch = async (event) => {
    event.preventDefault();
    const items = await fetchCocktails(value);
    console.log("items:" + items[0].strDrink); // <<<----- va queriendo por aca
    //dispatch(cocktailAction.setCocktailsItems())
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
