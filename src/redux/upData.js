import { UP_DATA } from "./actions"

export default function upData (subArray) {
  return {
    type: UP_DATA,
    payload: subArray,
  };
};
