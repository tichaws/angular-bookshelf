import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadBook } from '../../actions/book.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  private store = inject(Store<{ house: any[] }>);
  protected books$ = this.store.select(state => state.search.results);
  private readonly router = inject(Router);

  ngOnInit() {
    this.store.dispatch(loadBook());
  }

  selected(item: any) {
    let id = item.url.split('/').reverse()
    this.router.navigate(['/items', id[0]]);
  }
}
