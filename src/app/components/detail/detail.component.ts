import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadBookDetail } from '../../actions/book.actions';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: false,
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  private store = inject(Store<{ house: any[] }>);
  private router = inject(Router)
  protected detail = this.store.select(state => state.state.detail);

  constructor(private route: ActivatedRoute,private location: Location) {}
  id='';
  favorites = this.store.select(state => state.favorite);

  ngOnInit() {
    // Access route parameter
    this.id = this.route.snapshot.paramMap.get('id')||'';
    this.store.dispatch(loadBookDetail({query:this.id}))
  }
  

  backToPreviousPage() {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/home']);
    }
  }
  
}

