import { Component,ViewChild, OnInit } from '@angular/core';
import { JsonObject } from '@angular-devkit/core';
import { ToastrService } from 'ngx-toastr';
import { ProductListService } from "app/services/product-list.service";
import { MatSelectChange } from "@angular/material/select";
import { LocalStorageService } from 'ngx-webstorage';
import{Router} from '@angular/router';
import {FormControl, Validators,FormBuilder, FormGroup, FormArray, AbstractControl } from '@angular/forms';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';

export interface PeriodicElement {
  _id: string;
  brandName:string;
  registrationNo: string;
  brandWebsite:string;
  category: string;
  Percentage:number,
  image: string;
  status: string;
}

@Component({
  selector: 'app-brand-listing',
  templateUrl: './brand-listing.component.html',
  styleUrls: ['./brand-listing.component.css']
})
export class BrandListingComponent implements OnInit {
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  // dataSource: Array<any> = [];
  formdata:any;
  brandForm: FormGroup;
  dataSource:any;
  brandImgUrl:string;

  displayedColumns: string[] = ['_id','brandName','brandWebsite', 'category_name','image','status','active'];
  getBrands() {
    let params = {"status":["Pending","Active","Rejected"],"type":"admin"};
    
    this.ProductListService.getBrands(params)
      .subscribe((payload) => {
        var response = JSON.parse(JSON.stringify(payload));
        if (!response.error) {
          this.dataSource = new MatTableDataSource(response.data);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator; 
          //this.brandForm.patchValue(response.data);
        } else {
          this.toastr.error(response.message);
        }
      }, (error) => {
        this.toastr.error(error.status + " : " + error.statusText);
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    if(filterValue){
      this.dataSource.filter = filterValue;
    }else{
      this.dataSource.filter = "";
    }
    
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
    this.getBrands();
  }

  ngOnInit(): void {
    this.brandForm = this.fb.group({
      status:['']
      // arr: this.fb.array([this.createItem()])
    })
  }

  onOptionsSelected(items:MatSelectChange,id:any){
  
    this.formdata= {
      "id":id,
      "status":items.value
  }  
    this.ProductListService.updateBrandStatus(this.formdata).subscribe(
      (response:any) => {
        // console.log(response);
        if(response.message =="No Record Found."){
          this.toastr.success(response.message);
        }else{
          this.getBrands();
          this.toastr.success(response.message);
         // this.searchDataArr = response.data;
        }
      },
      (error:any) => {
        this.toastr.error(error.status + " : " + error.statusText);
      }
      
    )
  }

  OpenImg(url:any){
   this.brandImgUrl = url;
  }

}
