import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressCartComponent } from './address-cart.component';

describe('AddressCartComponent', () => {
  let component: AddressCartComponent;
  let fixture: ComponentFixture<AddressCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
