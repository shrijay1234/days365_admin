import { Injectable } from '@angular/core';
import { environment } from "environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LocalStorageService } from "ngx-webstorage";
import { json, JsonObject } from '@angular-devkit/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class PromoterService {
  constructor( 
    private http: HttpClient,
    private local: LocalStorageService) { 
  }

  baseURL = environment.API_URL;

  promoterRegistration(params = {}) {
    return this.http.post(this.baseURL +'/signup/registerPromoter',params);
  }

  getPromoterList(params = {}) {
    return this.http.get(this.baseURL +'/promoter/getPromoterListOnAdmin',params);
  }

  getPromoCodeList(params = {}) {
    return this.http.get(this.baseURL +'/promoter/getPromoCodeList?type=admin',params);
  }

  getSellerList(params = {}) {
    return this.http.get(this.baseURL +'/promoter/getSellerList?type=Approve',params);
  }

  getBrands(params = {}) {
    return this.http.post(this.baseURL +'/brand/getBrands',params);
  }

  promoCodeGeneration(params = {}) {
    return this.http.post(this.baseURL +'/promoter/generatePromocode',params);
  }

  getPromoters(params = {}) {
    return this.http.get(this.baseURL +'/promoter/getPromoterList?type=promoter',params);
  }
  
  saveBankDetails(params = {}){
    return this.http.put(this.baseURL +'/promoter/saveBankDetails',params);
  }

  getPromoCode(params = {}) {
    return this.http.get(this.baseURL +'/promoter/getPromoCodeListOnPromoter?type=promoter',params);
  }

  private newUser = new BehaviorSubject<any>({
    "id":"ram101"
  });
  
  setPromoterId(user: any) {
    console.log("id in settt serviceeee",user);
    this.newUser.next(user);
  }

  getPromoterId() {
    console.log("id in gettt serviceeee",this.newUser.asObservable());
    return this.newUser.asObservable();
  }

  getBankDetails(params = {}) {
    return this.http.get(this.baseURL +'/promoter/getBankDetails',params);
  }
  
}
