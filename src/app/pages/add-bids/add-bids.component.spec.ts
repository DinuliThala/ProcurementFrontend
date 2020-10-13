import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBidsComponent } from './add-bids.component';

describe('AddBidsComponent', () => {
  let component: AddBidsComponent;
  let fixture: ComponentFixture<AddBidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBidsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
