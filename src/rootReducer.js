// root reducer
import { combineReducers } from "redux"
import app from "./components/App/reduxReducer"
import card from "./components/Card/reduxReducer"

const appReducers = combineReducers({
  app,
  card
})

export default appReducers
