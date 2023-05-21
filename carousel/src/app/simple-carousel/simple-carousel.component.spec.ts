import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCarouselComponent } from './simple-carousel.component';

describe('SimpleCarouselComponent', () => {
  let component: SimpleCarouselComponent;
  let fixture: ComponentFixture<SimpleCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
