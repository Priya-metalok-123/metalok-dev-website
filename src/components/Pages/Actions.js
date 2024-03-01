// actions.js
import { SUBMIT_FORM } from './actionTypes';

export const submitForm = (formData) => ({
  type: SUBMIT_FORM,
  payload: formData,
});
