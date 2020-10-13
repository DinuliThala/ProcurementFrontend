import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {NzUploadChangeParam, NzUploadFile} from 'ng-zorro-antd/upload';
import {en_US, NzI18nService, zh_CN} from 'ng-zorro-antd/i18n';
import getISOWeek from 'date-fns/getISOWeek';

@Component({
  selector: 'app-add-bids',
  templateUrl: './add-bids.component.html',
  styleUrls: ['./add-bids.component.css']
})
export class AddBidsComponent implements OnInit {
  validateForm!: FormGroup;
  date = null;
  isEnglish = false;

  fileList: NzUploadFile[] = [
    {
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url: 'http://www.baidu.com/xxx.png'
    }
  ];

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  submitForm(): void {
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return {required: true};
    } else if (control.value !== this.validateForm.controls.password.value) {
      return {confirm: true, error: true};
    }
    return {};
  }

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();

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

  log(data: string): void {
    console.log(data);
  }

  constructor(private i18n: NzI18nService) {
  }
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  getWeek(result: Date): void {
    console.log('week: ', getISOWeek(result));
  }

  changeLanguage(): void {
    this.i18n.setLocale(this.isEnglish ? zh_CN : en_US);
    this.isEnglish = !this.isEnglish;
  }

}
