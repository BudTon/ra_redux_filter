import { TOGGLE_BOOLEAN } from "./actions"

export default function hiddenCancel(booleanValue) {
  return {
    type: TOGGLE_BOOLEAN,
    payload: booleanValue
  };
};
