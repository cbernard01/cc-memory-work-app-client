import {FETCH_MATH} from "../actions/actionTypes";

export default (state={}, action) => {
  switch (action.type) {
    case FETCH_MATH:
      return {...state, math: action.payload};
    default:
      return state;
  }
}
