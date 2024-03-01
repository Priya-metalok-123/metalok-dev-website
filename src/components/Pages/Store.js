import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


// Define your initial state
const initialState = {
  form:"",
  
  isSubmitted: false,
};

// Define your reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUBMIT_FORM':
      return  {...state,isSubmitted:true,form: {...action.payload} }
    case 'RESET_FORM':
      return {
        ...state,
        isSubmitted: false,
      };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(reducer, applyMiddleware(thunk));

export default store;

export const submitForm = (payload) => {
  return {
    type: 'SUBMIT_FORM',
    payload: payload
  };
};

export const resetForm = () => {
  return {
    type: 'RESET_FORM',
  };
};
