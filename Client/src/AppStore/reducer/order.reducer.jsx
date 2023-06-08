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
    // case "EMPTY_ORDER":
    //   console.log("Empty")
    //   return {
    //     ...state,
    //     data: null,
    //     error: null,
    // };
    case ORDER_ERROR:
      console.log(payload)
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}
