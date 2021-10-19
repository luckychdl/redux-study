import { useContext } from "react"
import ReduxContext from "../contexts/reduxContext"


const useReduxDispatch =()=>{
  const store = useContext(ReduxContext)
  return store.dispatch
}

export default useReduxDispatch