import { SHOW_COMPLETE, SHOW_ALL } from "../actions";

const initialState = "ALL"

const filter = (previousState = initialState, action)=>{
  if (action.type === SHOW_COMPLETE) {
    return "COMPLETE"
  }
  if (action.type === SHOW_ALL) {
    return "ALL"
  }
  return previousState;
}

export default filter