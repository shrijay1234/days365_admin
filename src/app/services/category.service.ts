import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "environments/environment";
import { LocalStorageService } from "ngx-webstorage";
import { JsonObject } from '@angular-devkit/core';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient,
    private local: LocalStorageService,
  ) { }

  baseURL = environment.API_URL;

  getCategories(params = {}) {
    return this.http.get(this.baseURL + '/category/subCategories', { params: params });
  }


  addCategory(formData: FormData) {
    // Add this header to allow browser to append content-type header automatically in order to avoid boundary not found error at the server.
    let headers = { 'Multi-Part-Request': 'dummy-header' };
    return this.http.post(this.baseURL + '/category', formData, { headers: headers });
  }
}
