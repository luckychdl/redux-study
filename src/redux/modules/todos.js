// 액션 타입 저으이
const ADD_TODO = 'redux-start/todos/ADD_TODO';
const COMPLETE_TODO = "redux-start/todos/COMPLETE_TODO"


// 액션 생성 함수
export const addTodo =(text)=>{
  return {
    type: ADD_TODO,
    text,
  }
}
export const completeTodo =(index)=>{
  return {
    type: COMPLETE_TODO,
    index
  }
}
// 초기값

const initialState = []

// 리듀서
const reducer= (state = initialState, action)=>{
  if (action.type === ADD_TODO) {
    return [...state, {text: action.text, done: false}]
  }
  if (action.type === COMPLETE_TODO) {
    return state.map((todo, index)=>{
      if(index === action.index) {
        return { ...todo, done: true}
      }
      return todo;
    })
  }
  return state
}

export default reducer