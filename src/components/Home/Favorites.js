import { Fragment } from "react";
import { useSelector } from "react-redux";
import ListItem from "./ListItem";

const Favorites = () => {
  const favorites = useSelector((state) => state.ui.favs);
  return (
    <Fragment>
      <h2>Your favorites</h2>
      <ul>
        {favorites.map((fav) => (
          <ListItem key={fav.id} item={fav} favorites={true} />
        ))}
      </ul>
    </Fragment>
  );
};

export default Favorites;
