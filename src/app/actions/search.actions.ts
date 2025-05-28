import { createAction, props } from '@ngrx/store';

export const search = createAction('[Search] Search', props<{ query: string }>());
export const searchSuccess = createAction('[Search] Search Success', props<{ payload: any[] }>());
export const searchFailure = createAction('[Search] Search Failure', props<{ error: string }>());