import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingsCoordinatationComponent } from './meetings-coordinatation.component';

describe('MeetingsCoordinatationComponent', () => {
  let component: MeetingsCoordinatationComponent;
  let fixture: ComponentFixture<MeetingsCoordinatationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingsCoordinatationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingsCoordinatationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
