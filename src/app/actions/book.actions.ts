import { createAction, props } from '@ngrx/store';

export const loadBook = createAction('[Book Page] Load Book');
export const loadBookSuccess = createAction('[Book API] Book Loaded Success', props<{ payload: any[] }>());
export const loadBookFailure = createAction('[Book API] Book Loaded Failure', props<{ error: any }>());

export const selectedBook = createAction('[Book Page] Select Book', props<{ query: any }>());
export const selectedBookSuccess = createAction('[Book Page] Book Selected Success', props<{ payload: any }>());
export const selectedBookFailure = createAction('[Book Page] Book Selected Failure', props<{ error: any }>());

export const loadBookDetail = createAction('[Book Page Detail] Load Book Detail', props<{ query: any }>());
export const loadBookDetailSuccess = createAction('[Book Detail API] Book Loaded Detail Success', props<{ payload: any[] }>());
export const loadBookDetailFailure = createAction('[Book Detail API] Book Loaded Detail Failure', props<{ error: any }>());
