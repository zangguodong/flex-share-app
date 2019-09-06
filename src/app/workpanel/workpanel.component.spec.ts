import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkpanelComponent } from './workpanel.component';

describe('WorkpanelComponent', () => {
  let component: WorkpanelComponent;
  let fixture: ComponentFixture<WorkpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
