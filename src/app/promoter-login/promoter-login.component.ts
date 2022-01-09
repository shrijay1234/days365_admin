import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from 'app/services/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ngx-webstorage';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-promoter-login',
  templateUrl: './promoter-login.component.html',
  styleUrls: ['./promoter-login.component.css']
})
export class PromoterLoginComponent implements OnInit {
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  spinner = false;
  submitted = false;
  promoterLoginForm: FormGroup;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private local: LocalStorageService,
    private LoginPromoterService: LoginService,
    private location: Location
  ) {
    if (this.local.retrieve('accessToken')) {
      this.router.navigateByUrl('/promoter-login');
    }
  }

  ngOnInit(): void { this.createForm();
  }
  
  createForm() {
    this.promoterLoginForm = this.formBuilder.group({
      'Email': ['', Validators.required],
      'Password': ['', Validators.required],
    });
  }


  getError(el) {
    switch (el) {
      case 'user':
        if (this.promoterLoginForm.get('Email').hasError('required')) {
          return 'Email required';
        }
        break;
      case 'pass':
        if (this.promoterLoginForm.get('Password').hasError('required')) {
          return 'Password required';
        }
        break;
      default:
        return '';
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.promoterLoginForm.invalid) {
      this.toastr.warning("Please provide all required fields");
      return;
    }
    this.submitted = false;
    this.spinner = true;
    console.log("this.promoterLoginForm.getRawValue()",this.promoterLoginForm.getRawValue());
    this.LoginPromoterService.promoterLogin(this.promoterLoginForm.getRawValue())
      .pipe(takeUntil(this.destroyed$))
      .subscribe((payload) => {
        var response = JSON.parse(JSON.stringify(payload));
        this.spinner = false;
        if (!response.error) {
          this.toastr.success(response.message);
          this.LoginPromoterService.setLocalStorage(response.data);
          this.router.navigateByUrl('/promoter-dashboard');
        }
        else {
          this.toastr.error(response.message);
        }
      }, (error) => {
        this.spinner = false;
        this.toastr.error(error.status + " : " + error.statusText);
      });
  }

}


