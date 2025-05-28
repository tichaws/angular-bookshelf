import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MyFavComponent } from './components/my-fav/my-fav.component';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import { searchReducer } from './reducers/search.reducer';
import { SearchComponent } from './components/search/search.component';
import { SearchEffects } from './effects/search.effects';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ToggleFavComponent } from './components/toggle-fav/toggle-fav.component';
import { BooksEffects } from './effects/books.effects';
import { bookReducer } from './reducers/book.reducers';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    MyFavComponent,
    HomeComponent,
    DetailComponent,
    SearchComponent,
    ToggleFavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ state:bookReducer, search: searchReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, 
    }),
    EffectsModule.forRoot([BooksEffects]),
    EffectsModule.forFeature([SearchEffects]),
    RouterOutlet, RouterLink, RouterLinkActive
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
