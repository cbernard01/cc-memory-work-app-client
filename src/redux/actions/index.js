import {FETCH_MATH} from "./actionTypes";
import ccAPI from "../../components/api/ccAPI";

export const fetchMath = () => async dispatch => {
  const response = await ccAPI.get(`/math`);

  dispatch({type: FETCH_MATH, payload: response.data[0]});
};
