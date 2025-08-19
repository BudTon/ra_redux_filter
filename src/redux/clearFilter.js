import { CLEAR_FILTER_VALUE } from "./actions"

export default function clearFilter () {
  return {
    type: CLEAR_FILTER_VALUE,
    payload: '',
  };
};