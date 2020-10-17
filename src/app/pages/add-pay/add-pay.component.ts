import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NzUploadChangeParam, NzUploadFile, NzUploadModule} from 'ng-zorro-antd/upload';
import getISOWeek from 'date-fns/getISOWeek';
import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';
import {BackendService} from '../../services/backend.service';

@Component({
  selector: 'app-add-pay',
  templateUrl: './add-pay.component.html',
  styleUrls: ['./add-pay.component.css']
})
export class AddPayComponent implements OnInit {

  loading = false;

  constructor(private backendService: BackendService,
              private fb: FormBuilder,
              private i18n: NzI18nService) {}
  validateForm!: FormGroup;
  date = null;
  payData: any;

  fileList: NzUploadFile[] = [];

  // invoce
  title: string;
  description: string;
  document: File = null;

  // payment
  // tslint:disable-next-line:variable-name
  payee: any;
  // tslint:disable-next-line:variable-name
  payment_date: string;
  payer: string;
  // tslint:disable-next-line:variable-name
  payed_on: string;
  remark: string;
  invoice: any;
  uploadUrl = 'http://localhost:3001/uploads//' + document;

  // addInvoice(): any {
  //   const title = this.formData().title;
  //   const description = this.formData().description;
  //   const document = this.formData().document;
  //
  //   this.backendService.addInvoice(title, description, document)
  //     .subscribe(data => {
  //       this.payData = data;
  //       console.log(data);
  //     });
  // }
  // addPayment(): any {
  //     const payee = this.formData().document;
  //   // tslint:disable-next-line:variable-name
  //     const payment_date = this.formData().document;
  //     const payer = this.formData().document;
  //   // tslint:disable-next-line:variable-name
  //     const payed_on = this.formData().document;
  //     const remark = this.formData().document;
  //     const invoice = this.formData().document;
  //
  //     this.backendService.addPayment(payee, payment_date, payer, payed_on, remark, invoice)
  //     .subscribe(data => {
  //       this.payData = data;
  //       console.log(data);
  //     });
  // }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      title: [this.title, [Validators.required]],
      description: [this.description, [Validators.required]],
      document: [this.document, [Validators.required]],

      payee: [this.payee, [Validators.required]],
      payment_date: [this.payment_date, [Validators.required]],
      payer: [this.payer, [Validators.required]],
      payed_on: [this.payed_on, [Validators.required]],
      remark: [this.remark, [Validators.required]],
      invoice: [this.invoice, [Validators.required]],
      // remember: [true]
    });
    this.formData();
  }

  submitForm(): void {
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }


  handleChange(info: NzUploadChangeParam): void {
    let fileList = [...info.fileList];

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    fileList = fileList.slice(-2);

    // 2. Read from response and show file link
    fileList = fileList.map(file => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });

    this.fileList = fileList;
  }
  // uploadImage(info: { file: NzUploadFile }): void {
  //   switch (info.file.status) {
  //     case 'uploading':
  //       this.loading = true;
  //       break;
  //     case 'done':
  //       // Get this url from response in real world.
  //       // tslint:disable-next-line:no-non-null-assertion
  //       this.getBase64(info.file!.originFileObj!, (img: string) => {
  //         this.loading = false;
  //       });
  //       this.document = info.file.originFileObj;
  //
  //       break;
  //     case 'error':
  //       // this.msg.error('Network error');
  //       this.loading = false;
  //       break;
  //   }
  // }

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    // tslint:disable-next-line:no-non-null-assertion
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  // Date picker handler
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  formData(): any{
    return this.validateForm.value;
  }

  addPayment(): any {
      const title = this.formData().title;
      const description = this.formData().description;
      const document = this.formData().document;

      const payee = this.formData().payee;
    // tslint:disable-next-line:variable-name
      const payment_date = this.formData().payment_date;
      const payer = this.formData().payer;
    // tslint:disable-next-line:variable-name
      const payed_on = this.formData().payed_on;
      const remark = this.formData().remark;
      const invoice = this.formData().invoice;

      this.backendService.addInvoice(title, description, document)
        .subscribe(data => {
          this.payData = data;
          console.log(data);
        });

      //
      // this.backendService.addPayment(payee, payment_date.toLocaleString(), payer, payed_on.toLocaleString(), remark, invoice)
      //   .subscribe(data => {
      //     this.payData = data;
      //     console.log(data);
      //   });

  }


}
