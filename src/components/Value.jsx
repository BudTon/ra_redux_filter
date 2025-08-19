import { useSelector, useDispatch } from "react-redux"
import deleteItem from '../redux/deleteItem'
import hiddenCancel from '../redux/hiddenCancel'
import upData from '../redux/upData'
import { SET_FILTER_VALUE } from "../redux/actions"

export default function Value() {
  const dispatch = useDispatch();
  const numberValue = useSelector((state) => state.number.filterValueData);
  if (Array.isArray(numberValue) && numberValue.length > 0) {
    return (
      <ul className="list">
        {numberValue.map((subArray, index) => {
          if (subArray[1]?.item !== undefined) {
            return (
              <li className="list-item" key={subArray[0].id}>
                <span className="item-text">{subArray[1].item}</span>
                <span className="item-text">{subArray[2].price}</span>
                <div className="buttons">
                  <button onClick={() => { dispatch(upData(subArray)), dispatch(hiddenCancel(true))}} className="change-button">✎</button>
                  <button onClick={() => { 
                    dispatch(deleteItem(index)), 
                    dispatch(hiddenCancel(false)),     
                    dispatch({
                        type: SET_FILTER_VALUE,
                        payload: '',
                      });}} 
                      className="delete-button">X</button>
                </div>
              </li>
            );
          }
          return null;
        }
        )}
      </ul>
    );
  };
  return <div>No data to show.</div>;
};
