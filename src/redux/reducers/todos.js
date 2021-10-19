import { ADD_TODO, COMPLETE_TODO} from "../actions";

const initialState = []
const todos= (previousState = initialState, action)=>{
  if (action.type === ADD_TODO) {
    return [...previousState, {text: action.text, done: false}]
  }
  if (action.type === COMPLETE_TODO) {
    return previousState.map((todo, index)=>{
      if(index === action.index) {
        return { ...todo, done: true}
      }
      return todo;
    })
  }
  return previousState;
}

export default todos