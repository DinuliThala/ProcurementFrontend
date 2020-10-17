import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BackendService} from '../../services/backend.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validateForm!: FormGroup;
  userNameLogin: string;
  passwordLogin: string;
  loginData: any;
   isChecked: any;

  submitForm(): void {
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder,
              private backendService: BackendService,
              private readonly router: Router
  ) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [this.userNameLogin, [Validators.required]],
      password: [this.passwordLogin, [Validators.required]],
      checked: [this.isChecked, false]
    });
    this.formData();
    console.log(this.userNameLogin, this.passwordLogin);
  }

  formData(): any {
    return this.validateForm.value;
  }

  loginToSystem(): any {
    const email = this.formData().email;
    const password = this.formData().password;

    if (this.isChecked === true){
      this.backendService.supplierLogin(email, password)
        .subscribe(data => {
          this.loginData = data;
          console.log(data);
          this.backendService.setData(data);
          this.router.navigate(['supplier']);

        });

    } else {
      this.backendService.login(email, password)
        .subscribe(data => {
          this.loginData = data;
          console.log(data);

          this.router.navigate(['home']);

        });

      }
    }


}
