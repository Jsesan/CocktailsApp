import { uiAction } from "./ui-slice";
export const fetchFavData = (user) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-7db00-default-rtdb.firebaseio.com/users/" +
          user +
          "/favorites.json"
      );

      console.log(response);

      if (!response.ok) {
        throw new Error("Could not fetch favs data!");
      }

      const data = await response.json();
      console.log(data);

      return data;
    };

    try {
      const favsData = await fetchData();
      console.log(favsData);
      dispatch(uiAction.replaceFav({ favs: favsData.favorites || [] }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const sendFavData = (user, favs) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-7db00-default-rtdb.firebaseio.com/users/" +
          user +
          "/favorites.json",
        {
          method: "PUT",
          body: JSON.stringify({
            favorites: favs,
          }),
        }
      );

      console.log(
        "https://react-http-7db00-default-rtdb.firebaseio.com/users/" +
          user +
          "/favorites.json"
      );

      if (!response.ok) {
        console.log("error");
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      console.log("entre");
      await sendRequest();
    } catch (error) {
      console.log(error);
    }
  };
};
