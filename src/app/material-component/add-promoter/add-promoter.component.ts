import { Component, OnInit } from '@angular/core';
import { PromoterService } from '../../services/promoter.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-promoter',
  templateUrl: './add-promoter.component.html',
  styleUrls: ['./add-promoter.component.css']
})
export class AddPromoterComponent implements OnInit {
  promoCodeGenForm:FormGroup;
  promoterArray: Array<any> = [];
  sellerArray: Array<any> = [];
  brandArray: Array<any> = [];
  submitted:boolean= false;
  constructor( private PromoterService:PromoterService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    public dialog: MatDialog,
    private local: LocalStorageService,
    private router: Router) {

      let accessToken = this.local.retrieve('accessToken');
      let type = this.local.retrieve('type');
      if (!accessToken || type !== 'admin') {
        this.router.navigateByUrl('/');
      }

    this.getAllPromoterList();
    this.getSellerList();
    this.getBrands();
    }

  ngOnInit(): void {

    this.promoCodeGenForm = this.formBuilder.group({

      promoterName: new FormControl('', Validators.compose([
        Validators.required
      ])),

      sellerName: new FormControl('', Validators.compose([
        Validators.required
      ])),

      brandName: new FormControl('', Validators.compose([
        Validators.required
      ])),

    });

  }

  getAllPromoterList() {
    this.PromoterService.getPromoterList()
      .subscribe((payload) => {
        var response = JSON.parse(JSON.stringify(payload));
        if (!response.error) {
          this.promoterArray = response.data;
        } else {
          this.toastr.error(response.message);
        }
      }, (error) => {
        this.toastr.error(error.status + " : " + error.statusText);
      });
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
  
  getBrands() {
    let params = {"status": ["Active"],"type":"admin"};
    this.PromoterService.getBrands(params)
      .subscribe((payload) => {
        var response = JSON.parse(JSON.stringify(payload));
        if (!response.error) {
          this.brandArray = response.data;
        } else {
          this.toastr.error(response.message);
        }
      }, (error) => {
        this.toastr.error(error.status + " : " + error.statusText);
      });
  }

  onSubmit()
{
  this.submitted = true;
  if(this.promoCodeGenForm.valid){
    console.log(this.promoCodeGenForm.value);
    var promoterInfo = this.promoCodeGenForm.value.promoterName.split("@@");
    var sellerInfo = this.promoCodeGenForm.value.sellerName.split("@@");
    var brandInfo = this.promoCodeGenForm.value.brandName.split("@@");
    
    let obj = {
      "promoterId":promoterInfo[0],
      "promoterName":promoterInfo[1],
      "sellerId":sellerInfo[0],
      "sellerName":sellerInfo[1],
      "brandName":brandInfo[1],
      "percentageOnBrand":brandInfo[0]
    }
    // return
    this.PromoterService.promoCodeGeneration(obj).subscribe(
      (response:any) => {
        if(response.message =="Account already exists."){
          this.toastr.success(response.message);
        }else if(response.message =="Successfully Created"){
          this.toastr.success(response.message);
          const dialogRef = this.dialog.closeAll();  
          window.location.reload();            
        }else{
          this.toastr.success(response.message);
        }
      },
      (error:any) => {
        console.log(error);
        this.toastr.error(error.status + " : " + error.statusText);
      }
      
    )
  }
}


}
