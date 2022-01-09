import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LocalStorageService } from "ngx-webstorage";
import { environment } from "environments/environment";

@Injectable({
  providedIn: 'root'
})

export class ProductListService {

  constructor(
    private http: HttpClient,
    private local: LocalStorageService,
  ) { }

  baseURL = environment.API_URL;

  getAllProductList(params = {}) {
    return this.http.post(this.baseURL +'/product/getAllProductList',params);
  }

  getProductVariant(params = {}) {
    return this.http.get(this.baseURL +'/product/getProductVariant/',{ params: params });
  }

  updateProductStatus(params:any){
    return this.http.put(this.baseURL +'/product/changeProductStatus',params);
  }

  getBrands(params = {}) {
    return this.http.post(this.baseURL +'/brand/getBrands',params);
  }

  updateBrandStatus(params:any){
    return this.http.put(this.baseURL +'/brand/updateStatus',params);
  }

  getSellerList(params = {}) {
    return this.http.get(this.baseURL +'/promoter/getSellerList?type=All',params);
  }

  getSellerData(params){
    return this.http.get(this.baseURL +'/vendorDetails/getSellerData?id='+params);
  }

  updateSellerStatus(payload:any){
    return this.http.put(this.baseURL +'/vendorDetails/approve/account',payload);
  }


  getVendorPrivateFileURL(params) {
    return this.http.get(this.baseURL + "/vendorDetails/admin/signedURL", { params: params });
  }

}
