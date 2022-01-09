
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
  selector: 'app-promoter-dashboard',
  templateUrl: './promoter-dashboard.component.html',
  styleUrls: ['./promoter-dashboard.component.css']
})
export class PromoterDashboardComponent implements OnInit {
  promoterName:any;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private local: LocalStorageService,
    private LoginPromoterService: LoginService,
    private location: Location
  ) {
    
    let accessToken = this.local.retrieve('accessToken');
    this.promoterName = this.local.retrieve('fullname');

    let type = this.local.retrieve('type');
    if (!accessToken || type !== 'promoter') {
      this.router.navigateByUrl('/promoter-login');
    }
   }

  ngOnInit(): void {
  }

}
