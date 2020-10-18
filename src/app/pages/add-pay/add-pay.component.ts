import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzUploadChangeParam, NzUploadFile} from 'ng-zorro-antd/upload';
import {NzI18nService} from 'ng-zorro-antd/i18n';
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
              private i18n: NzI18nService, ) {}
  validateForm!: FormGroup;
  date = null;
  payData: any;

  fileList: NzUploadFile[] = [];

  // invoice
  title: string;
  description: string;
  document: File;

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
  uploadUrl = 'http://localhost:3001/invoice/add';

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
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      console.log(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      console.log(`${info.file.name} file upload failed.`);
    }
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

    this.backendService.addInvoice(title, description, document)
      .subscribe(data => {
        this.payData = data;
        console.log(data);
      });

    const payee = this.formData().payee;
    // tslint:disable-next-line:variable-name
    const payment_date = this.formData().payment_date;
    const payer = this.formData().payer;
    // tslint:disable-next-line:variable-name
    const payed_on = this.formData().payed_on;
    const remark = this.formData().remark;
    const invoice = this.formData().invoice;

    this.backendService.addPayment(payee, payment_date, payer, payed_on, remark, invoice)
      .subscribe(data => {
        this.payData = data;
        console.log(data);
      });
  }

}
