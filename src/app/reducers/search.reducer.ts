import { createReducer, on } from '@ngrx/store';
import * as SearchActions from '../actions/search.actions';

export interface SearchState {
  query: string;
  results: string[];
  loading: boolean;
  error: string | null;
}

export const initialState: SearchState = {
  query: '',
  results: [],
  loading: false,
  error: null,
};

export const searchReducer = createReducer(
  initialState,
  on(SearchActions.search, (state, { query }) => ({
    ...state,
    query,
    loading: true,
    error: null,
  })),
  on(SearchActions.searchSuccess, (state, { payload }) => ({
    ...state,
    results:payload,
    loading: false,
  })),
  on(SearchActions.searchFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);