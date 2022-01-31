import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyServiceCallsComponent } from './my-service-calls.component';

describe('MyServiceCallsComponent', () => {
  let component: MyServiceCallsComponent;
  let fixture: ComponentFixture<MyServiceCallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyServiceCallsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyServiceCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
