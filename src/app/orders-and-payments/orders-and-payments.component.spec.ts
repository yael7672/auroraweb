import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersAndPaymentsComponent } from './orders-and-payments.component';

describe('OrdersAndPaymentsComponent', () => {
  let component: OrdersAndPaymentsComponent;
  let fixture: ComponentFixture<OrdersAndPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersAndPaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersAndPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
