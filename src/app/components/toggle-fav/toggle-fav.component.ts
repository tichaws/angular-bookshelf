import { Component, inject, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { selectedBook } from '../../actions/book.actions';

@Component({
  selector: 'app-toggle-fav',
  standalone: false,
  templateUrl: './toggle-fav.component.html',
  styleUrl: './toggle-fav.component.scss'
})
export class ToggleFavComponent {
  @Input() item:any;
  @Input() isAbs:boolean = false;
  isFav$!: Observable<boolean>;
  private store = inject(Store<{ house: any[] }>);

  protected fav$ = this.store.select(state => state.state.favorite);

  ngOnInit(): void {
    this.isFav$ = this.store.select(state => state.state.favorite).pipe(
      map(favList => favList.some((f:any) => f.name === this.item.name)) // compare by name
    );
  }

  toggle() {
    this.store.dispatch(selectedBook({ query :this.item}));
  }
}
