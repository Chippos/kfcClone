import { ORDER, ORDER_ERROR, } from "../constants";

const initialState = {
  data: null,
  error: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ORDER:
    return {
        ...state,
        data: payload,
    };
    case ORDER_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}
