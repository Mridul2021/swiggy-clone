import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McDonaldsComponent } from './mc-donalds.component';

describe('McDonaldsComponent', () => {
  let component: McDonaldsComponent;
  let fixture: ComponentFixture<McDonaldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [McDonaldsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(McDonaldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
