import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFavComponent } from './my-fav.component';

describe('MyFavComponent', () => {
  let component: MyFavComponent;
  let fixture: ComponentFixture<MyFavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyFavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
