import { useReducer } from 'react';
import { ADD_NOTE, REMOVE_NOTE } from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        site: [...state.site, action.note],
      };

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
