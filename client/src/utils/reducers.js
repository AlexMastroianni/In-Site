import { useReducer } from 'react';
import { ADD_NOTE, REMOVE_FROM_SITE } from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        site: [...state.site, action.note],
      };

    case REMOVE_FROM_SITE:
      let newState = state.site.filter((product) => {
        return state._id !== action._id;
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
