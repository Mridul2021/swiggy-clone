import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KFCMenuComponent } from './kfc.component';

describe('KFCMenuComponent', () => {
  let component: KFCMenuComponent;
  let fixture: ComponentFixture<KFCMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KFCMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KFCMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
