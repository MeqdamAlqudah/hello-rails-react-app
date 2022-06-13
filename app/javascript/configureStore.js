import { configureStore ,applyMiddleware} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";
const GENERATE_RANDOME_GREETING = "GENERATE_RANDOME_GREETING"
const initialState = {
  greeting:""
};

function rootReducer(state=initialState,action){
  console.log(action.type);
  switch (action.type){
    case GENERATE_RANDOME_GREETING:
      return {greeting:action.json.greeting}
    default:
      return state
  }
}
const store = configureStore({reducer:rootReducer,Middleware:[thunk,logger]});


export default store
