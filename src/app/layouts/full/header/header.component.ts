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
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent implements OnInit, OnDestroy {

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  isLogin: boolean;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private local: LocalStorageService,
    private loginService: LoginService,
    private location: Location
  ) {
    if (this.local.retrieve('accessToken')) {
      this.isLogin = true;
    }
    else {
      this.isLogin = false;
    }
  }

  ngOnInit() {

  }

  signOut() {
    this.loginService.logoutAdmin()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((payload) => {
        var response = JSON.parse(JSON.stringify(payload));
        // console.log("response", response);
        // if (!response.error) {
        //   this.toastr.success(response.message);
        // }
        // else {
        //   this.toastr.error(response.message);
        // }
        this.loginService.logout();
        this.isLogin = false;
      }, (error) => {
        this.toastr.error(error.status + " : " + error.statusText);
        this.loginService.logout();
        this.isLogin = false;
      });
  }

  @HostListener('window:beforeunload')
  async ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }


}
