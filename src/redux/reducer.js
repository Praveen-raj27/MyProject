import { GET_USER_DETAILS } from "../types";
const INITIAL_STATE = {
  userDetails:{}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USER_DETAILS:
      if (
        action.payload
      ) {
        state.userDetails = action.payload
      }
      return Object.assign({}, state);
      
    default:
      return state;
  }
};
