import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BfcComponent } from './bfc.component';

describe('BfcComponent', () => {
  let component: BfcComponent;
  let fixture: ComponentFixture<BfcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BfcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BfcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
