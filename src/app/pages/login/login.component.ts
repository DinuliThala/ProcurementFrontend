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
  )
  {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [this.userNameLogin, [Validators.required]],
      password: [this.passwordLogin, [Validators.required]],
      remember: [true]
    });
    console.log(this.userNameLogin, this.passwordLogin);
  }

  // tslint:disable-next-line:typedef
  loginToSystem() {
    const fd1 = new FormData();
    const fd2 = new FormData();

    fd1.append('email', this.userNameLogin);
    fd2.append('password', this.passwordLogin);

    this.backendService.login(fd1, fd2)
      .subscribe(data => {
        this.loginData = data;
        console.log(data);
        console.log(this.userNameLogin, this.passwordLogin);
      });
    console.log(this.userNameLogin, this.passwordLogin);

    this.router.navigate(['dashboard']);

  }
}
