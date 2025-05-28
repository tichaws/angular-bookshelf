import { createReducer, on } from '@ngrx/store';
import { loadBookSuccess, loadBookDetailSuccess, selectedBookSuccess } from '../actions/book.actions';

export interface BookState {
  books: any[];
  favorite: any[];
  detail: {}
}

export const initialState: BookState = {
  books: [],
  favorite: [],
  detail: {}
};
export const bookReducer = createReducer(
  initialState,
  on(loadBookSuccess, (state, props) => ({ ...state, books: props.payload })),
  on(loadBookDetailSuccess, (state, props) => ({ ...state, detail: props.payload })),
  on(selectedBookSuccess, (state, props) => {
    const query = props.payload.query;
    const exists = state.favorite.some(item => item.name === query.name);
    return {
      ...state,
      favorite: exists
        ? state.favorite.filter(item => item.name !== query.name) // remove
        : [...state.favorite, query]                              // add
    };
  }),
);