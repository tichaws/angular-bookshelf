import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { search } from '../../actions/search.actions';
import { SearchState } from '../../reducers/search.reducer';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  results$: Observable<string[]>;
  loading$: Observable<boolean>;
  query = '';

  constructor(private store: Store<{ search: SearchState }>) {
    this.results$ = store.select((state) => state.search.results);
    this.loading$ = store.select((state) => state.search.loading);
  }

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input?.value ?? ''; // fallback if somehow null
    this.store.dispatch(search({ query: value }));
  }
}
