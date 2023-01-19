import { useReducer } from 'react';
import { REMOVE_NOTE } from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case REMOVE_NOTE:
      let newState = state.site.filter((notes) => {
        return notes._id !== action._id;
      });
      return {
        note: newState,
      };

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
