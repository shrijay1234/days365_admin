import { Component, OnInit, EventEmitter,  Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from 'app/services/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ngx-webstorage';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() navbarEventEmitter: EventEmitter<any> = new EventEmitter();
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

  
  ngOnInit(): void {
  }
  public toggleNavbar() {
    this.navbarEventEmitter.emit(null);
  }
  promoterSignOut() {
    this.loginService.logoutPromoter()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((payload) => {
        var response = JSON.parse(JSON.stringify(payload));
        this.loginService.promoterLogout();
        this.isLogin = false;
      }, (error) => {
        this.toastr.error(error.status + " : " + error.statusText);
        this.loginService.promoterLogout();
        this.isLogin = false;
      });
  }
}
