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
    <div className="list-item">
      <div className="list-item-info" onClick={expandItem}>
        <li>
          <h3>{props.item.title}</h3>
        </li>
      </div>
      <button>&#11088;</button>
    </div>
  );
};

export default ListItem;
