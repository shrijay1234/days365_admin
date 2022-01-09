import { Component, OnInit,ViewChild } from '@angular/core';
import { ProductListService } from "app/services/product-list.service";
import { JsonObject } from '@angular-devkit/core';
import { take, takeUntil } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { MatSelectChange } from "@angular/material/select";
import{Router} from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import {FormControl, Validators,FormBuilder, FormGroup, FormArray, AbstractControl } from '@angular/forms';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';

export interface PeriodicElement {
  _id:string,
  title: string;
  brandName: string;
  manuFacturer: string;
  handlingPeriod: number;
  salePrice: number;
  maximumRetailPrice: number;
  countryOfOrigin: string,
  condition: string;
  status: string;
  topfeaturedandotherfields:string;
}

@Component({
  selector: 'app-product-second-approval',
  templateUrl: './product-second-approval.component.html',
  styleUrls: ['./product-second-approval.component.css']
})
export class ProductSecondApprovalComponent implements OnInit {
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  formdata:any;
  secondApprovalForm: FormGroup;
  productListArr: Array<any> = [];
  dataSource: any;
  displayedColumns: string[] = ['_id','title', 'brandName','handlingPeriod', 'showVarient', 'status','topfeaturedandotherfields','featureActions','action'];

  statusArray = [
    { id: 1, name: "Processing" },
    { id: 2, name: "Active" },
    { id: 3, name: "Reject" }
  ];
  getAllProductList() {
    let params: JsonObject = { "status": ["Processing","Active","Rejected"],"Type":"adminSecond" };
    this.ProductListService.getAllProductList(params)
      .subscribe((payload) => {
        var response = JSON.parse(JSON.stringify(payload));
        if (!response.error) {
          // this.dataSource = response.data;
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

  constructor(
    private fb: FormBuilder,
    private ProductListService: ProductListService,
    private toastr: ToastrService,
    private router:Router,
    private local: LocalStorageService,
  ) {
    let accessToken = this.local.retrieve('accessToken');
    let type = this.local.retrieve('type');
    if (!accessToken || type !== 'admin') {
      this.router.navigateByUrl('/');
    }
    this.getAllProductList();
  }

  ngOnInit(): void {
    this.secondApprovalForm = this.fb.group({
      status: [null]
    });
  }
  OpenProductVariants(id:any){
    this.router.navigate(['/view-product'], { queryParams: { id: id } });
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
          this.getAllProductList();
          this.toastr.success(response.message);
         // this.searchDataArr = response.data;
        }
      },
      (error:any) => {
        this.toastr.error(error.status + " : " + error.statusText);
      })
  	}
	
	  // update product feature types
  	onFeatureSelect(items:MatSelectChange){
    	this.formdata= {
      		"id":items.value,
      		"topfeaturedandotherfields":items.source.triggerValue
  	}  
    this.ProductListService.updateProductStatus(this.formdata).subscribe(
    	(response:any) => {
        	console.log(response);
        	if(response.message =="No Record Found."){
          		this.toastr.success(response.message);
        	}else{
          		this.getAllProductList();
          		this.toastr.success(response.message);
         		// this.searchDataArr = response.data;
        	}
      	},
		(error:any) => {
			this.toastr.error(error.status + " : " + error.statusText);
		})
  	}

}
