import { Component, OnInit } from '@angular/core';
import {Requisiton} from '../../models/Requisiton';
import {BackendService} from '../../services/backend.service';
import {Site} from '../../models/Site';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private backendService: BackendService, private fb: FormBuilder){ }
  reqList: Site[] = [];
  // tslint:disable-next-line:variable-name
  siteId: any;
  // tslint:disable-next-line:variable-name
  site_id: any;
  validateForm!: FormGroup;

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      site_id: [this.site_id, [Validators.required]],
    });
    this.formData();
    this.getSites();
  }

  formData(): any{
    return this.validateForm.value;
  }

  submitForm(): void {
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }
  getSites(): any {
    this.backendService.getAllSites()
      .toPromise().then((data: Site[]) => {
      const thisDup = this;
      data.map( record =>  {
        thisDup.reqList.push(record);
        console.log(record.site_id);
      });
    });
  }

  setSelectedId($event: any): any {}

}
