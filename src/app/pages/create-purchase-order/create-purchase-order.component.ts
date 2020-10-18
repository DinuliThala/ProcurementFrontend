import { Component, OnInit } from '@angular/core';
import {NzButtonSize} from 'ng-zorro-antd/button';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BackendService} from '../../services/backend.service';
import {Requisiton} from '../../models/Requisiton';
import {Bids} from '../../models/Bids';

@Component({
  selector: 'app-create-purchase-order',
  templateUrl: './create-purchase-order.component.html',
  styleUrls: ['./create-purchase-order.component.css']
})
export class CreatePurchaseOrderComponent implements OnInit {
  validateForm!: FormGroup;
  reqId: any;
  bidList: Bids[] = [];
  list: any;
  private bidId: any;
  bids: any;
  private poData: any;
  private status: any;
  radioValue: any;

  constructor(private backendService: BackendService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      bidId: [this.bidId, [Validators.required]],
      status: [this.status, [Validators.required]]
      // remember: [true]
    });
    this.formData();
    this.getAllBids();
  }

  submitForm(): void {
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  formData(): any {
    return this.validateForm.value;
  }

  setSelectedId($event: any): any {
  }

  getAllBids(): any {
    this.backendService.viewAllBids()
      .toPromise().then((data: Bids[]) => {
      const thisDup = this;
      data.map(bid => {
        thisDup.bidList.push(bid);
      });
    });
  }

  updateBidStatus(): any {
    const bidId = this.formData().bidId;
    const status = this.formData().status;

    this.backendService.updateBidStatus(bidId, status)
      .subscribe(data => {
        this.poData = data;
        console.log(data);
        // this.backendService.setData(data);
      });
  }
}
