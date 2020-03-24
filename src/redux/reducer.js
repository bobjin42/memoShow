import { ActionTypes } from "./actionTypes";

const INITIAL_STATE = {};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SET_EMAIL:
      return {
        ...state,
        email: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
