import { useReducer } from 'react';
import {
  REMOVE_NOTE_FROM_SITE,
  UPDATE_NOTE,
  ADD_NOTE_TO_SITE,
  UPDATE_SITE,
  UPDATE_COMMENT,
} from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_SITE:
      return {
        ...state,
        sites: [...action.sites],
      };

    case ADD_NOTE_TO_SITE:
      return {
        ...state,
        sites: [...state.sites, action.notes],
      };

    case UPDATE_NOTE:
      return {
        ...state,
        notes: [...action.notes],
      };

    case REMOVE_NOTE_FROM_SITE:
      let newState = state.sites.filter((note) => {
        return note._id !== action._id;
      });

      return {
        ...state,
        site: newState,
      };

    case UPDATE_COMMENT:
      return {
        ...state,
        comments: [...action.comments],
      };

    default:
      return state;
  }
};

export function useInsiteReducer(initialState) {
  return useReducer(reducer, initialState);
}
