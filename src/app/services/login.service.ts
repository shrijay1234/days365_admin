import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LocalStorageService } from "ngx-webstorage";
import { environment } from "environments/environment";
import { Router } from "@angular/router";
import { json, JsonObject } from '@angular-devkit/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private local: LocalStorageService,
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) { }


  baseURL = environment.API_URL;


  /**
 * Store Tokens
 */

  setLocalStorage(user: JsonObject) {
    this.local.clear();
    this.local.store('accessToken', user.accessToken);
    this.local.store('refreshToken', user.refreshToken);
    this.local.store('fullname', user.fullname);
    this.local.store('type', user.type);
  }

  /**
   * Login Admin.
   */

  adminLogin(loginData: string) {
    return this.http.post(this.baseURL + "/signin/admin", loginData);
  }

  // promoter Login API.

  promoterLogin(params = {}) {
    return this.http.post(this.baseURL +'/signin/signinPromoter',params);
  }

  /**
   * Logout User on token expires.
   */

  logout() {
    this.local.clear();
    this.toastr.success("you were signed out from the device");
    this.router.navigateByUrl('/');
  }


  /**
   * logout User
   */

  logoutAdmin(): Observable<object> {
    const refreshToken = this.local.retrieve('refreshToken');
    return this.http.post(`${this.baseURL}/signout/admin`, { refreshToken: refreshToken });
  }

  /**
   * Logout Promoter on token expires.
   */

   promoterLogout() {
    this.local.clear();
    this.toastr.success("you were signed out from the device");
    this.router.navigateByUrl('/promoter-login');
  }

  logoutPromoter(): Observable<object>{
    const refreshToken = this.local.retrieve('refreshToken');
    return this.http.post(`${this.baseURL}/signout/promoter`, { refreshToken: refreshToken });
  }

  /**
   * Refresh expired Access token.
   */

  refreshAccessToken(): Observable<object> {
    const refreshToken = this.local.retrieve('refreshToken');
    return this.http.post(this.baseURL + "/token/refresh", { refreshToken: refreshToken });
  }

}
