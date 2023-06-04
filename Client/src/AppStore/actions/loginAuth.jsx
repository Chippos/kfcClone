import axios from "axios";
import { LOGIN, LOGIN_ERROR } from "../constants";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const userLogin = (formData) => async (dispatch) => {
  try {
    const res = await axios.post("api/login", formData, config);
    dispatch({
      type: LOGIN,
      payload: res.data,
    });
  } catch (error) {
    const errors = error.message;
    dispatch({
      type: LOGIN_ERROR,
      payload: errors,
    });
  }
};
