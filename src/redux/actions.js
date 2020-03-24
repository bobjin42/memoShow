import { ActionTypes } from "./actionTypes";

export const setEmail = email => ({
  type: ActionTypes.SET_EMAIL,
  payload: email
});
