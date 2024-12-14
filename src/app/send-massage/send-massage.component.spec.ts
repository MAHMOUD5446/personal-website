import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMassageComponent } from './send-massage.component';

describe('SendMassageComponent', () => {
  let component: SendMassageComponent;
  let fixture: ComponentFixture<SendMassageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SendMassageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SendMassageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
