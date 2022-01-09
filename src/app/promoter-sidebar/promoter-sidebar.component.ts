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
  selector: 'app-promoter-sidebar',
  templateUrl: './promoter-sidebar.component.html',
  styleUrls: ['./promoter-sidebar.component.css']
})
export class PromoterSidebarComponent implements OnInit {
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  isLogin: boolean;
  constructor(  
    private router: Router,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private local: LocalStorageService,
    private loginService: LoginService,
    private location: Location) { 
      if (this.local.retrieve('accessToken')) {
        this.isLogin = true;
      }
      else {
        this.isLogin = false;
      }
    }

  ngOnInit(): void {
  }



}
