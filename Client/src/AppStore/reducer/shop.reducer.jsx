import { SHOP_DATA, SHOP_DATA_ERROR } from "../constants";

const initialState = {
  data: null,
  isLoading: true,
  error: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SHOP_DATA:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
      break;
    case SHOP_DATA_ERROR:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
      break;
    default:
      return state;
  }
}
