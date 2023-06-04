import { LOGIN, LOGIN_ERROR } from "../constants";

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
      // console.log(payload)
      const { error } = payload;
      if (error) {
        // console.log(error);
        return {
          ...state,
          data: payload,
          isLoading: false,
          isLogedIn: false,
        };
      } else {
        console.log('Data Aya')
        return {
          ...state,
          data: payload,
          isLoading: false,
          isLogedIn: true,
        };
      }
    case LOGIN_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}
