import { uiActions } from "./ui-slice";

export const fetchCartData = (user) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-7db00-default-rtdb.firebaseio.com/users/" +
          user +
          "/favorites.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch favs data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
    } catch (error) {
      console.log(error);
    }
  };
};

export const sendCartData = (user, favs) => {
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

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();
    } catch (error) {
      console.log(error);
    }
  };
};
