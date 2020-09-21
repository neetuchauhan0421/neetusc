import authReducer from './authReducers';
//import userReducer from './userReducers';
import { combineReducers } from "redux";


export default combineReducers({
    auth: authReducer,
//  user: userReducer,
  
});

// import { combineReducers } from "redux";
// import userReducer from "./userReducer";

// export default combineReducers({
//   user: userReducer,
// });