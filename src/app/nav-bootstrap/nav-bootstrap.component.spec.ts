import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBootstrapComponent } from './nav-bootstrap.component';

describe('NavBootstrapComponent', () => {
  let component: NavBootstrapComponent;
  let fixture: ComponentFixture<NavBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavBootstrapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
