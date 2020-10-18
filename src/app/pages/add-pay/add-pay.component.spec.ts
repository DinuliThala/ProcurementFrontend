import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddPayComponent} from './add-pay.component';

describe('AppTestComponent', () => {
  let component: AddPayComponent;
  let fixture: ComponentFixture<AddPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPayComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
