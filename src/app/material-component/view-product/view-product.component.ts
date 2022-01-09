import { Component, OnInit,ViewChild } from '@angular/core';
import { JsonObject } from '@angular-devkit/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductListService } from "app/services/product-list.service";
import {MatDialog} from '@angular/material/dialog';
import { ViewProductDetailComponent } from 'app/view-product-detail/view-product-detail.component';
import { LocalStorageService } from 'ngx-webstorage';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';

export interface PeriodicElement {
  // daysProductCode:string;
  productId:string;
  productIdType:string;
  color: string;
  size:string;
  stock:number,
  SKUId:string;
  yourPrice:number;
  expiryDate_Img: string;
  importerMRP_Img:string;
  productSeal_Img:string,
  product_Img1:string,
  MainImg:string
}

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  displayedColumns: string[] = ['productId','productIdType','color','flavour','expiryDate','size','stock', 'SKUId','maximumRetailPrice','yourPrice','expiryDate_Img', 'importerMRP_Img','productSeal_Img','product_Img1','MainImg'];
  dataSource: Array<any> = [];
  productId:string;
  expiryImageUrl:string;
  mrpImageUrl:string;
  sealImageUrl:string;
  frontImageUrl:string;
  backImageUrl:string;


  getProductVariant(id:string) {
    let params: JsonObject = { id: id};
    this.ProductListService.getProductVariant(params)
      .subscribe((payload) => {
        var response = JSON.parse(JSON.stringify(payload));
        if (!response.error) {
          this.dataSource = response.data.productVariant;
        } else {
          this.toastr.error(response.message);
        }
      }, (error) => {
        this.toastr.error(error.status + " : " + error.statusText);
      });
  }

  constructor(
  
    private toastr: ToastrService,
    private router:Router,
    private activatedRoute: ActivatedRoute,
    private ProductListService: ProductListService,
    private local: LocalStorageService,
  ) {
    let accessToken = this.local.retrieve('accessToken');
    let type = this.local.retrieve('type');
    if (!accessToken || type !== 'admin') {
      this.router.navigateByUrl('/');
    }
    this.getProductVariant(this.activatedRoute.snapshot.queryParamMap.get("id"));
   }

  ngOnInit(): void {
   
  }

  OpenExpiryImg(url:any){
    this.expiryImageUrl = url;
  }

  OpenMrpImg(url:any){
    this.mrpImageUrl = url;
  }

  OpenSealImg(url:any){
    this.sealImageUrl = url;
  }

  OpenMainImg(url:any){
   this.frontImageUrl = url;
  }

  OpenBackImg(url:any){
    this.backImageUrl = url;
  }

}
