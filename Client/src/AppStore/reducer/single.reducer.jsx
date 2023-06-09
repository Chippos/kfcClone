import { SINGLE_PRODUCT, SINGLE_PRODUCT_ERROR } from "../constants";

const initialState = {
    data: null,
    isLoading: true,
    error: null,
};

export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case SINGLE_PRODUCT:
        console.log(payload)
        return {
          ...state,
          data: payload,
          isLoading: false,
        };
        break;
      case SINGLE_PRODUCT_ERROR:
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