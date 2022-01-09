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
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit, OnDestroy {

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  spinner = false;
  submitted = false;
  loginForm !: FormGroup;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private local: LocalStorageService,
    private loginService: LoginService,
    private location: Location
  ) {
    if (this.local.retrieve('accessToken')) {
      this.router.navigateByUrl('/dashboard');
    }
  }

  ngOnInit(): void {
    this.createPreLoginForm();
  }


  createPreLoginForm() {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(50)])
    });
  }


  hasError(controlName: string, errorName: string) {
    return this.loginForm.controls[controlName].hasError(errorName);
  }


  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      this.toastr.warning("Please provide all required fields");
      return;
    }
    this.submitted = false;
    this.spinner = true;
    this.loginService.adminLogin(this.loginForm.getRawValue())
      .pipe(takeUntil(this.destroyed$))
      .subscribe((payload) => {
        var response = JSON.parse(JSON.stringify(payload));
        this.spinner = false;
        if (!response.error) {
          this.toastr.success(response.message);
          this.loginService.setLocalStorage(response.data);
          this.router.navigateByUrl('/dashboard');
        }
        else {
          this.toastr.error(response.message);
        }
      }, (error) => {
        this.spinner = false;
        this.toastr.error(error.status + " : " + error.statusText);
      });
  }




  @HostListener('window:beforeunload')
  async ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
