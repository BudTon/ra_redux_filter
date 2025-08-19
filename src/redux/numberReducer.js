import {
  SET_USER_VALUE,
  SET_PRICE,
  DELETE_ITEM,
  TOGGLE_BOOLEAN,
  NEW_DATA,
  UP_DATA,
  CHANGE_DATA,
  CANCEL_BUTTON,
  SET_FILTER_VALUE,
  CLEAR_FILTER_VALUE
} from "./actions";

const initialState = {
  value: [],
  userId: undefined,
  userValue: 'Замена стекла',
  userPrice: 2500,
  booleanValue: false,
  filterValue: '',
  filterValueData: [],
};

export default function numberReducer(state = initialState, action) {
  switch (action.type) {

    case NEW_DATA:
      return {
        ...state,
        userId: undefined,
        value: [...state.value, action.payload]
      };

    case UP_DATA:
      return {
        ...state,
        userId: action.payload[0].id,
        userValue: action.payload[1].item,
        userPrice: action.payload[2].price,
      };

    case CHANGE_DATA:
      state.value.map(item => {
        if (action.payload[0] === item[0].id) {
          item[1].item = action.payload[1],
            item[2].price = action.payload[2]
        };
      });
      return {
        ...state,
        userId: undefined
      };

    case CANCEL_BUTTON:
      return {
        ...state,
        userId: undefined
      };

    case SET_USER_VALUE:
      return {
        ...state,
        userValue: action.payload,
      };

    case SET_FILTER_VALUE:
      if (action.payload !== '') {
        return {
          ...state,
          filterValue: action.payload,
          filterValueData: state.value.filter(item => item[1].item.includes(action.payload)),
        };
      };

      return {
        ...state,
        filterValue: action.payload,
        filterValueData: state.value
      };

    case CLEAR_FILTER_VALUE:
      return {
        ...state,
        filterValue: action.payload,
      };

    case SET_PRICE:
      return {
        ...state,
        userPrice: action.payload,
      };

    case DELETE_ITEM:
      return {
        ...state,
        value: state.value.filter((_, idx) => idx !== action.payload)
      };

    case TOGGLE_BOOLEAN:
      return {
        ...state,
        booleanValue: action.payload,
      };

    default:
      return state;

  };
};
