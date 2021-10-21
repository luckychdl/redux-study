
import axios from "axios"
import { call, delay, put, takeEvery } from "@redux-saga/core/effects"
import { push } from "connected-react-router"
// 액션 타입 정의
// 깃헙 API 호출을 시작
const GET_USERS_START = "redux-start/users/GET_USERS_START" 

// 깃헙 API 호출에 대한 응답이 성공
const GET_USERS_SUCCESS = "redux-start/users/GET_USERS_SUCCESS" 

// 깃헙 API 호출에 대한 응답이 실패
const GET_USERS_FAIL = "redux-start/users/GET_USERS_FAIL" 

// redux-promise-middleware
const GET_USERS = 'GET_USERS'
const GET_USERS_PENDING = "redux-start/users/GET_USERS_PENDING"
const GET_USERS_FULFILLED = "redux-start/users/GET_USERS_FULFILLED"
const GET_USERS_REJECTED = "redux-start/users/GET_USERS_REJECTED"



// 액션 함수 생성

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


// 초기값
const initialState = {
  loading : false,
  data: [],
  error: null
}

// 리듀서 
export default function reducer(state = initialState, action) {
  if (action.type === GET_USERS_START || action.type === GET_USERS_PENDING) {
    return {
      ...state,
      loading: true,
      error:null
    }
  }
  if (action.type === GET_USERS_SUCCESS) {
    return {
      ...state,
      loading: false,
      data: action.data
    }
  }
  if (action.type === GET_USERS_FULFILLED) {
    return {
      ...state,
      loading: false,
      data: action.payload
    }
  }
  if (action.type === GET_USERS_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.error
    }
  }
  if (action.type === GET_USERS_REJECTED) {
    return {
      ...state,
      loading: false,
      error: action.PAYLOAD
    }
  }
  return state
}


// redux-thunk

export function getUsersThunk(){
  return async (dispatch, getState, { history })=>{
    try{
      console.log(history)
      dispatch(getUsersStart())

      const res = await axios.get("http://api.github.com/users")
      dispatch(getUsersSuccess(res.data))
      history.push("/")
    }catch(error){
      dispatch(getUsersFail(error))
    }
  }
}


// redux-promise-middleware

export function getUsersPromise (){
  return {
    type: GET_USERS,
    payload: async () => {
        const res = await axios.get("http://api.github.com/users")
        
        return res.data
    }
  }
}

// redux-saga
const GET_USERS_SAGA_START = "GET_USERS_SAGA_START"
function* getUsersSaga(action) {
  try{
    yield put(getUsersStart())
    yield delay(2000)
    const res = yield call(axios.get,"http://api.github.com/users" )
    yield put(getUsersSuccess(res.data))
    
    yield put(push('/'))
  }catch(error){
    yield(getUsersFail(error))
  }

}

export function getUsersSagaStart(){
  return{
    type: GET_USERS_SAGA_START
  }
}

export function* usersSaga(){
  yield takeEvery(GET_USERS_SAGA_START,getUsersSaga)
}