import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NzUploadChangeParam, NzUploadFile} from 'ng-zorro-antd/upload';
import {en_US, NzI18nService, zh_CN} from 'ng-zorro-antd/i18n';
import getISOWeek from 'date-fns/getISOWeek';
import {BackendService} from '../../services/backend.service';
import {Requisiton} from '../../models/Requisiton';
import {Supplier} from '../../models/Supplier';

@Component({
  selector: 'app-add-bids',
  templateUrl: './add-bids.component.html',
  styleUrls: ['./add-bids.component.css']
})
export class AddBidsComponent implements OnInit {

  constructor(private backendService: BackendService,
              private fb: FormBuilder,
              private i18n: NzI18nService) {}
  validateForm!: FormGroup;
  date = null;
  bidData: any;

  // To show Req Id
    reqId: any;
    reqList: Requisiton[] = [];
    list: any;
    amount: any;
    description: any;
    requisitionId: any;
    supplierId: any;

    supList: Supplier[] = [];
    supId: any;

  ngOnInit(): void {

    this.validateForm = this.fb.group({
      amount: [this.amount, [Validators.required]],
      description: [this.description, [Validators.required]],
      requisitionId: [this.requisitionId, [Validators.required]],
      supplierId: [this.supplierId, [Validators.required]],
      // remember: [true]
    });
    this.formData();
    this.getReqId();
  }

  submitForm(): void {
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  log(data: string): void {
    console.log(data);
  }
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
  formData(): any{
    return this.validateForm.value;
  }

  addBids(): any {
    // tslint:disable-next-line:forin
    const amount = this.formData().amount;
    const description = this.formData().description;
    const requisitionId = this.formData().requisitionId;
    const supplierId = this.formData().supplierId;

    this.backendService.addBid(amount, description, requisitionId, supplierId)
      .subscribe(data => {
        this.bidData = data;
        console.log(data);
      });
  }

  getSupplierData(): any {
    this.backendService.viewAllSuppliers()
      .toPromise().then((data: Supplier[]) => {
      const thisDup = this;
      data.map(record => {
        thisDup.supList.push(record);
      });
    });
  }

  getReqId(): any {
    this.backendService.viewAllRequisition()
      .toPromise().then((data: Requisiton[]) => {
      const thisDup = this;
      data.map( record =>  {
        thisDup.reqList.push(record);
      });
    });
  }

  setSelectedReqId($event: any): any { }

  setSelectedSupId($event: any): any { }
}
