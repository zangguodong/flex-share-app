import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FxlayoutComponent } from './fxlayout.component';

describe('FxlayoutComponent', () => {
  let component: FxlayoutComponent;
  let fixture: ComponentFixture<FxlayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FxlayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FxlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
