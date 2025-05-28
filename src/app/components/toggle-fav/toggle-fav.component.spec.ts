import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleFavComponent } from './toggle-fav.component';

describe('ToggleFavComponent', () => {
  let component: ToggleFavComponent;
  let fixture: ComponentFixture<ToggleFavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToggleFavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
