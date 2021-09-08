import "./ListItem.css";
import { uiAction } from "../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";

const ListItem = (props) => {
  const favs = useSelector((state) => state.ui.favs);
  const dispatch = useDispatch();
  const expandItem = () => {
    console.log("abrir item");
    dispatch(uiAction.clickItemList(true));
    dispatch(uiAction.selectItemList(props.item));
  };

  const addToFavs = () => {
    console.log("to add --> " + props.item.title);
    dispatch(uiAction.addFavList(props.item));
    console.log("pos");
  };

  const removeFromFav = () => {
    dispatch(uiAction.removeFav(props.item.id));
  };

  const inFavorites = favs.find((fav) => fav.id === props.item.id);

  const classes = props.favorites ? "list-item-info fav" : "list-item-info";

  return (
    <div className="list-item">
      <div className={classes} onClick={expandItem}>
        <li>
          <h3>{props.item.title}</h3>
        </li>
      </div>
      {!inFavorites && <button onClick={addToFavs}>&#9733;</button>}
      {inFavorites && <button onClick={removeFromFav}>&#9734;</button>}
    </div>
  );
};

export default ListItem;
