import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingeReqComponent } from './singe-req.component';

describe('SingeReqComponent', () => {
  let component: SingeReqComponent;
  let fixture: ComponentFixture<SingeReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingeReqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingeReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
