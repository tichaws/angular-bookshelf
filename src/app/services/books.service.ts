import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private http = inject(HttpClient);

  getAll() {
    return this.http.get('https://anapioficeandfire.com/api/books');
  }

  getBooksDetail(id:any) {
    return this.http.get('https://anapioficeandfire.com/api/books/'+id);
  }
}
