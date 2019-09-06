import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropsDemoComponent } from './props-demo.component';

describe('PropsDemoComponent', () => {
  let component: PropsDemoComponent;
  let fixture: ComponentFixture<PropsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
