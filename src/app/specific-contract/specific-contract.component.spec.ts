import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificContractComponent } from './specific-contract.component';

describe('SpecificContractComponent', () => {
  let component: SpecificContractComponent;
  let fixture: ComponentFixture<SpecificContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificContractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
