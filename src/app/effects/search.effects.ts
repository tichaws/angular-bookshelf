import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import * as SearchActions from './../actions/search.actions';
import { select, Store } from '@ngrx/store';

@Injectable()
export class SearchEffects {
    private actions$ = inject(Actions);
    private store = inject(Store<{ book: any[] }>);
    protected book$ = this.store.select(state => state.state.books);

    search$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SearchActions.search),
            withLatestFrom(this.store.pipe(select(state => state.state.books))), // or other selector
            switchMap(([action, items]) => {
                let filtered = []
                if(action.query === ''){
                    filtered = items
                }else{
                    filtered = items.filter((item:any) =>
                        item.name.toLowerCase().includes(action.query.toLowerCase())
                    );
                }
                return of(filtered).pipe(
                    map(payload => SearchActions.searchSuccess({ payload })),
                    catchError(() => of(SearchActions.searchFailure({ error: 'Search failed' })))
                );
            })
        )
    );
}