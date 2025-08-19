import { NEW_DATA } from "./actions"

export default function newData (number) {
    return {
    type: NEW_DATA,
    payload: number,    
  };
};
