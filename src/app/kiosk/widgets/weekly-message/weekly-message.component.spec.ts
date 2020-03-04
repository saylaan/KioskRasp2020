import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyMessageComponent } from './weekly-message.component';

describe('WeeklyMessageComponent', () => {
  let component: WeeklyMessageComponent;
  let fixture: ComponentFixture<WeeklyMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
