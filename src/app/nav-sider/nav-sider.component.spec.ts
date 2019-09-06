import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSiderComponent } from './nav-sider.component';

describe('NavSiderComponent', () => {
  let component: NavSiderComponent;
  let fixture: ComponentFixture<NavSiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavSiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
