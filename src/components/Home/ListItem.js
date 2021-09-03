import "./ListItem.css";
import { uiAction } from "../../store/ui-slice";
import { useDispatch } from "react-redux";

const ListItem = (props) => {
  const dispatch = useDispatch();
  const expandItem = () => {
    console.log("abrir item");
    dispatch(uiAction.clickItemList(true));
    dispatch(uiAction.selectItemList(props.item));
  };

  return (
    <div className="list-item" onClick={expandItem}>
      <li>
        <h3>{props.item.title}</h3>
        <button>Add to favorites</button>
      </li>
    </div>
  );
};

export default ListItem;
