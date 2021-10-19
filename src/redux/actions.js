import axios from "axios";

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = "COMPLETE_TODO"
// {type: ADD_TODO, text: '할 일'}
export const addTodo =(text)=>{
  return {
    type: ADD_TODO,
    text,
  }
}

// {type: COMPELTE_TODO, index: 3}
export const completeTodo =(index)=>{
  return {
    type: COMPLETE_TODO,
    index
  }
}

export const SHOW_ALL = 'SHOW_ALL'
export const SHOW_COMPLETE = 'SHOW_COMPLETE'

export const showAll =() =>{
  return {type: SHOW_ALL}
}

export const showComplete =() =>{
  return {type: SHOW_COMPLETE}
}

// users
// 깃헙 API 호출을 시작
export const GET_USERS_START = "GET_USERS_START" 

// 깃헙 API 호출에 대한 응답이 성공
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS" 

// 깃헙 API 호출에 대한 응답이 실패
export const GET_USERS_FAIL = "GET_USERS_FAIL" 
export function getUsersStart (){
  return {
    type: GET_USERS_START
  }
}
export function getUsersSuccess (data){
  return {
    type: GET_USERS_SUCCESS,
    data,
  }
}
export function getUsersFail (error){
  return {
    type: GET_USERS_FAIL,
    error
  }
}
export function getUsersThunk(){
  return async (dispatch)=>{
    try{
      dispatch(getUsersStart())
      const res = await axios.get("http://api.github.com/users")
      dispatch(getUsersSuccess(res.data))
    }
    catch(error){
      dispatch(getUsersFail(error))
    }

  }
}
const GET_USERS = 'GET_USERS'
export const GET_USERS_PENDING = "GET_USERS_PENDING"
export const GET_USERS_FULFILLED = "GET_USERS_FULFILLED"
export const GET_USERS_REJECTED = "GET_USERS_REJECTED"

export function getUsersPromise (){
  return {
    type: GET_USERS,
    payload: async () => {
        const res = await axios.get("http://api.github.com/users")
        return res.data
    }
  }
}