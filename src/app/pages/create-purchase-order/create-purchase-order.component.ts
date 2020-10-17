import { Component, OnInit } from '@angular/core';
import {NzButtonSize} from 'ng-zorro-antd/button';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BackendService} from '../../services/backend.service';
import {Requisiton} from '../../models/Requisiton';

@Component({
  selector: 'app-create-purchase-order',
  templateUrl: './create-purchase-order.component.html',
  styleUrls: ['./create-purchase-order.component.css']
})
export class CreatePurchaseOrderComponent implements OnInit {
  validateForm!: FormGroup;
  reqId: any;
  reqList: Requisiton[] = [];
  list: any;
  private bidId: any;

  constructor(private backendService: BackendService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      bidId: [this.bidId, [Validators.required]]
      // remember: [true]
    });
    this.formData();
    // this.getReqId();
  }

  submitForm(): void {
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  formData(): any{
    return this.validateForm.value;
  }

  setSelectedId($event: any): any {

  }

}
