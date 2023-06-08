import { LOGIN, LOGIN_ERROR, LOGOUT } from "../constants";

const initialState = {
  data: null,
  isLoading: false,
  isLogedIn: false,
  error: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      const { error } = payload;
      if (error) {
        return {
          ...state,
          data: payload,
          isLoading: false,
          isLogedIn: false,
        };
      } else {
        return {
          ...state,
          data: payload,
          isLoading: false,
          isLogedIn: true,
        };
      }
    case "LOGOUT":
      return {
        ...state,
        data: null,
        isLoading: false,
        isLogedIn: false,
        error: null,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}
