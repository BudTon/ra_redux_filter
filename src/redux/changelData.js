import { CHANGE_DATA } from "./actions"

export default function changeData (userId) {
  return {
    type: CHANGE_DATA,
    payload: userId,
  };
};
