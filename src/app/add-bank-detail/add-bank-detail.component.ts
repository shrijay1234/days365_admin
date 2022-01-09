import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PromoterService } from '../services/promoter.service';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-add-bank-detail',
  templateUrl: './add-bank-detail.component.html',
  styleUrls: ['./add-bank-detail.component.css']
})
export class AddBankDetailComponent implements OnInit {
  addBankDetailsForm: FormGroup;
  submitted:boolean= false;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private PromoterService:PromoterService,
    private router: Router,
    public dialog: MatDialog,
    private local: LocalStorageService){
      let accessToken = this.local.retrieve('accessToken');
      let type = this.local.retrieve('type');
      if (!accessToken || type !== 'promoter') {
        this.router.navigateByUrl('/promoter-login');
      }
     }

  ngOnInit(): void {
    this.addBankDetailsForm = this.formBuilder.group({

      BankName: new FormControl('', Validators.compose([
        Validators.required
      ])),
      AccountNo: new FormControl('', Validators.compose([
        Validators.required
      ])),
      IFSCCode: new FormControl('', Validators.compose([
        Validators.required
      ])),
    });

    this.PromoterService.getPromoterId().subscribe(info => {
      this.PromoterService.getBankDetails(info.id).subscribe(
        (response:any) => {
           if(response.message =="Successfully getting Promoter List"){
             this.addBankDetailsForm.patchValue(response.data);    
          }else{
            this.toastr.success(response.message);
          }
        },
        (error:any) => {
          console.log(error);
          this.toastr.error(error.status + " : " + error.statusText);
        }
        
      )
      
    });
  }
 

onSubmit()
{
  this.submitted = true;
  if(this.addBankDetailsForm.valid){
    console.log(this.addBankDetailsForm.value);

    this.PromoterService.getPromoterId().subscribe(info => {
      this.addBankDetailsForm.value.id=info.id;
    this.PromoterService.saveBankDetails(this.addBankDetailsForm.value).subscribe(
      (response:any) => {
         if(response.message =="Added Bank Details Successfully"){
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
  })
  }
}

}
