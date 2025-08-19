import { useDispatch, useSelector } from "react-redux";
import { SET_USER_VALUE, SET_PRICE, SET_FILTER_VALUE } from "../redux/actions";
import newData from "../redux/newData";
import changeData from "../redux/changelData";
import cancelBatton from "../redux/cancelBatton";
import Value from "./Value";
import hiddenCancel from "../redux/hiddenCancel";
import clearFilter from "../redux/clearFilter";
import { v4 as uuidv4 } from 'uuid';
import './mode.css'

export const MainApp = () => {
  const dispatch = useDispatch();
  const { value: _numberValue, userValue, userPrice, filterValue } = useSelector((state) => state.number);

  const booleanValue = useSelector((state) => state.number.booleanValue);
  let userId = useSelector((state) => state.number.userId);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(hiddenCancel(false))

    if (userId === undefined) {
      dispatch(newData([{ id: uuidv4() }, { item: userValue }, { price: userPrice }]));
    } else {
      dispatch(changeData([userId, userValue, userPrice]))
    }
    dispatch({
      type: SET_FILTER_VALUE,
      payload: '',
    });
  }

  const cancelButton = () => {
    dispatch(hiddenCancel(false))
    dispatch(cancelBatton())
  }

  const clearButton = () => {
    dispatch(clearFilter())
    dispatch({
      type: SET_FILTER_VALUE,
      payload: '',
    });
  }

  return (
    <>
      <h2>10. Redux</h2>
      <h3>10.2 Фильтрация</h3>
      <div className="container">
        <div className="filter-box">
          <p className="filter">Filter</p>
          <div>
            <input
              className="input-filter"
              type="text"
              value={filterValue}
              onChange={(e) => {
                dispatch({
                  type: SET_FILTER_VALUE,
                  payload: e.target.value,
                });
              }}
            />
          </div>
          <div>
            <button className="clear-button" onClick={() => { clearButton() }}>Clear</button>
          </div>

        </div>
        <div className="header">
          <form className="input-form" onSubmit={submitHandler}>
            <div>
              <input
                className="input-field"
                type="text"
                required
                value={userValue}
                onChange={(e) => {
                  dispatch({
                    type: SET_USER_VALUE,
                    payload: e.target.value,
                  });
                }}
              />
            </div>
            <div>
              <input
                className="input-field"
                type="number"
                required
                value={userPrice}
                onChange={(e) => {
                  dispatch({
                    type: SET_PRICE,
                    payload: e.target.value,
                  });
                }}
              />
            </div>
            <div className="button">
              <div>
                <button className="save-button">Save</button>
              </div>
            </div>
          </form>
          <div className="button">
            <div>
              <button onClick={() => { cancelButton() }} className={`cancel-button ${booleanValue ? '' : 'hidden'}`}>cancel</button>
            </div>
          </div>
        </div>
        <Value />
      </div>
    </>
  )
}
