import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelloreKitchenComponent } from './vellore-kitchen.component';

describe('VelloreKitchenComponent', () => {
  let component: VelloreKitchenComponent;
  let fixture: ComponentFixture<VelloreKitchenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VelloreKitchenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VelloreKitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
