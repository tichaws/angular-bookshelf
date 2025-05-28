import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { BooksService } from '../services/books.service';
import { search, searchFailure } from '../actions/search.actions';

@Injectable()
export class BooksEffects {
  private actions$ = inject(Actions);
  private booksService = inject(BooksService);

  loadBook = createEffect(() => {
    return this.actions$.pipe(
      ofType('[Book Page] Load Book'),
      exhaustMap(() => this.booksService.getAll()
        .pipe(
          map(data => ({ type: '[Book API] Book Loaded Success', payload: data })),
          catchError(() => EMPTY)
        ))
    );
  });

  loadBookSuccess = createEffect(() => {
    return this.actions$.pipe(
      ofType('[Book API] Book Loaded Success'),
      map(payload => search({ query: '' })),
      catchError(() => of(searchFailure({ error: 'Search failed' })))
    );
  });

  selectedBook = createEffect(() => {
    return this.actions$.pipe(
      ofType('[Book Page] Select Book'),
      map(data => ({ type: '[Book Page] Book Selected Success', payload: data })),
      catchError(() => EMPTY)

    );
  });

  loadBookDetail = createEffect(() => {
    return this.actions$.pipe(
      ofType('[Book Page Detail] Load Book Detail'),
      exhaustMap((action) => this.booksService.getBooksDetail(action.query)
        .pipe(
          map(data => ({ type: '[Book Detail API] Book Loaded Detail Success', payload: data })),
          catchError(() => EMPTY)
        ))
    );
  });
}