
import {
    AUTH_START,
    AUTH_SUCCESS,
    AUTH_FAIL,
    USER_EMAIL,
    USER_REGISTER,
} from '../actions/types';

const initialState = {
    token: null,
    userId: 0,
    email: null,
    error: null,
    loading: false,
    authRedirectPath: '/'
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH_START:
      return {
        ...state,
        loading:true,
      };
    case AUTH_SUCCESS:
        return {
            ...state,
            token:action.token,
            userId:action.userId,
            error:null,
            loading:false
        }
    case AUTH_FAIL:
        return {
            ...state,
            error:action.error,
            loading:false
        }
        
          case USER_REGISTER:
          return {
            ...state,
            user_register: action.payload,
            // userId:action.payload.userId
          };
          case USER_EMAIL:
          return {
            ...state,
            login: action.payload,
            userId: action.payload.userId
        
          };
    default:
            return state;
  }
}
