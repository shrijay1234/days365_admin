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
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

	private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);


	constructor(
		private router: Router,
		private toastr: ToastrService,
		private formBuilder: FormBuilder,
		private local: LocalStorageService,
		private loginService: LoginService,
		private location: Location
	) {
		if (!this.local.retrieve('accessToken')) {
			this.router.navigateByUrl('/');
		}
	}

	ngOnInit() {

	}



	@HostListener('window:beforeunload')
	async ngOnDestroy() {
		this.destroyed$.next(true);
		this.destroyed$.complete();
	}

}