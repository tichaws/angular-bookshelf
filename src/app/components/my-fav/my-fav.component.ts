import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadBook, selectedBook } from '../../actions/book.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-fav',
  standalone: false,
  templateUrl: './my-fav.component.html',
  styleUrl: './my-fav.component.scss'
})
export class MyFavComponent {
  private store = inject(Store<{ house: any[] }>);
  protected favorites$ = this.store.select(state => state.state.favorite);
  private readonly router = inject(Router);

  ngOnInit() {
    this.store.dispatch(loadBook());
  }

  selected(item: any) {
    let id = item.url.split('/').reverse()
    this.router.navigate(['/items', id[0]]);
  }
}
