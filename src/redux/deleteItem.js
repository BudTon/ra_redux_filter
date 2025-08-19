import { DELETE_ITEM } from "./actions"

export default function deleteItem(index) {
  return {
    type: DELETE_ITEM,
    payload: index,
  };
};
