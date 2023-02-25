import { useReducer } from 'react';
import { REMOVE_NOTE, UPDATE_NOTE } from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case REMOVE_NOTE:
      let newState = state.site.filter((notes) => {
        return notes._id !== action._id;
      });
      return {
        ...state,
        note: newState,
      };

    default:
      return state;

    case UPDATE_NOTE:
      return {
        ...state,
        note: [...action.note],
      };
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
