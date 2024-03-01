// reducer.js
import { SUBMIT_FORM } from './actionTypes';

const initialState = {
  // Initial state
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_FORM:
      // Handle the submit form action
      return {
        ...state,
        // Update state based on the action payload
      };
    default:
      return state;
  }
};

export default reducer;
