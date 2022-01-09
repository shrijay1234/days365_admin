import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import { ProductListService } from "app/services/product-list.service";
import { PromoterService } from "app/services/promoter.service";
import { JsonObject } from '@angular-devkit/core';
import { take, takeUntil } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { MatSelectChange } from "@angular/material/select";
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';

export interface PeriodicElement {
  _id:string,
  title: string;
  brandName: string;
  manuFacturer: string;
  handlingPeriod: number;
  vendor_id:string,
  // salePrice: number;
  // maximumRetailPrice: number;
  countryOfOrigin: string,
  condition: string;
  status: string;
  action:string

}

export interface statusList {
  status: string;
  id: string;
}

@Component({
  selector: 'app-product-first-approval',
  templateUrl: './product-first-approval.component.html',
  styleUrls: ['./product-first-approval.component.css']
})
export class ProductFirstApprovalComponent implements OnInit {
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  sellerArray: Array<any> = [];
  formdata:any;
  productListArr: Array<any> = [];
  dataSource:any;
  displayedColumns: string[] = ['_id','title', 'brandName', 'manuFacturer', 'handlingPeriod', 'countryOfOrigin', 'condition','shippingCharges','shippingChargesAmt', 'status','action','vendor_id'];
  

  getAllProductList() {
    let params: JsonObject = { "status": ["Pending","Processing","Rejected"]};
    this.ProductListService.getAllProductList(params)
      .subscribe((payload) => {
        var response = JSON.parse(JSON.stringify(payload));
        if (!response.error) {
          this.dataSource = new MatTableDataSource(response.data);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator; 
        } else {
          this.toastr.error(response.message);
        }
      }, (error) => {
        this.toastr.error(error.status + " : " + error.statusText);
      });
  }
  applyFilter(filterValue: string) {
    console.log("filterValue.........",filterValue);
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  applyFilter101(filterValue: MatSelectChange) {
    console.log("filterValue.........",filterValue);
    // filterValue = filterValue.trim(); // Remove whitespace
    // filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  constructor(
    private ProductListService: ProductListService,
    private PromoterService : PromoterService,
    private toastr: ToastrService,
    private local: LocalStorageService,
    private router: Router
  ) {

    let accessToken = this.local.retrieve('accessToken');
    let type = this.local.retrieve('type');
    if (!accessToken || type !== 'admin') {
      this.router.navigateByUrl('/');
    }

    this.getAllProductList();
    this.getSellerList();
  }


  statusListArray: statusList[] = [
    {status: 'Pending',id:""},
    {status: 'Processing', id:""},
    {status: 'Rejected',id:""}
  ];
  selectedStatus = this.statusListArray[1].status;
  ngOnInit(): void {

  }

  getSellerList() {
    this.PromoterService.getSellerList()
      .subscribe((payload) => {
        var response = JSON.parse(JSON.stringify(payload));
        if (!response.error) {
          this.sellerArray = response.data;
        } else {
          this.toastr.error(response.message);
        }
      }, (error) => {
        this.toastr.error(error.status + " : " + error.statusText);
      });
  }
 
  onOptionsSelected(items:MatSelectChange){
    this.formdata= {
      "id":items.value,
      "status":items.source.triggerValue
  }  
    this.ProductListService.updateProductStatus(this.formdata).subscribe(
      (response:any) => {
        console.log(response);
        if(response.message =="No Record Found."){
          this.toastr.success(response.message);
        }else{
          this.toastr.success(response.message);
          this.getAllProductList();
         // this.searchDataArr = response.data;
        }
      },
      (error:any) => {
        this.toastr.error(error.status + " : " + error.statusText);
      }
      
    )
  }
 
}
