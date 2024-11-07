import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DominosComponent } from './dominos.component';

describe('DominosComponent', () => {
  let component: DominosComponent;
  let fixture: ComponentFixture<DominosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DominosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DominosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
