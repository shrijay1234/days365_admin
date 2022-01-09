import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ProductListService } from "app/services/product-list.service";
import { JsonObject } from '@angular-devkit/core';
import { take, takeUntil } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { MatSelectChange } from "@angular/material/select";
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { FormControl, Validators, FormBuilder, FormGroup, FormArray, AbstractControl } from '@angular/forms';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { MatDialog } from "@angular/material/dialog";


export interface PeriodicElement {
  vendor_id: string;
  fullname: string;
  sellerEmail: string;
  mobileNumber: string;
  company_name: string;
  store_name: string;
  company_address: string;
  tax_details: string;
  bank_account_details: string;
  signature_file_name: string;
  GST_license_file_name: string;
  food_license_file_name: string;
  shop_license_file_name: string;
  blank_cheque_file_name: string;
  status: string;
  action: string
}

@Component({
  selector: 'app-seller-approval',
  templateUrl: './seller-approval.component.html',
  styleUrls: ['./seller-approval.component.css']
})
export class SellerApprovalComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  dataSource: any;
  displayedColumns: string[] = ['vendor_id', 'fullname', 'sellerEmail', 'mobileNumber', 'company_name', 'store_name', 'company_address', 'tax_details', 'bank_account_details', 'signature_file_name',
    'GST_license_file_name', 'food_license_file_name', 'shop_license_file_name', 'blank_cheque_file_name', 'status', 'action']

  companyAddressForm: FormGroup;
  taxDetailsForm: FormGroup;
  bankACDetailsForm: FormGroup;
  formdata: any;
  signatureImgUrl: string;

  disabled = false;
  disabled2 = false;
  reason: string = '';
  status: string;
  id: string;


  getAllSellerList() {
    this.dataSource = [];
    this.ProductListService.getSellerList()
      .subscribe((payload) => {
        var response = JSON.parse(JSON.stringify(payload));
        if (!response.error) {
          console.log(response.data);
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
    console.log("filterValue.........", filterValue);
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(
    private fb: FormBuilder,
    private ProductListService: ProductListService,
    private toastr: ToastrService,
    private router: Router,
    private local: LocalStorageService,
    public matDialog: MatDialog) {
    let accessToken = this.local.retrieve('accessToken');
    let type = this.local.retrieve('type');
    if (!accessToken || type !== 'admin') {
      this.router.navigateByUrl('/');
    }
    this.getAllSellerList();
  }

  ngOnInit(): void {
    this.companyAddressForm = this.fb.group({
      country: new FormControl(''),
      state: new FormControl(''),
      pincode: new FormControl(''),
      city: new FormControl(''),
    });
    this.taxDetailsForm = this.fb.group({
      state: new FormControl(''),
      seller_name: new FormControl(''),
      GST_number: new FormControl(''),
      PAN_number: new FormControl(''),
    })
    this.bankACDetailsForm = this.fb.group({
      account_holder_name: new FormControl(''),
      account_type: new FormControl(''),
      account_number: new FormControl(''),
      IFSC_code: new FormControl(''),
    })
  }

  openSignatureImg(url: any) {
    this.signatureImgUrl = url;
  }

  getCompanyDtl(id: string, type: string) {
    this.ProductListService.getSellerData(id)
      .subscribe((payload) => {
        var response = JSON.parse(JSON.stringify(payload));
        if (!response.error) {

          if (response && response.data && response.data.company_address) {
            this.companyAddressForm.patchValue(response.data.company_address);
          }

          if (response && response.data && response.data.tax_details) {
            this.taxDetailsForm.patchValue(response.data.tax_details);
          }

          if (response && response.data && response.data.bank_account_details) {
            this.bankACDetailsForm.patchValue(response.data.bank_account_details);
          }

        } else {
          this.toastr.error(response.message);
        }
      }, (error) => {
        this.toastr.error(error.status + " : " + error.statusText);
      });
  }

  onOptionsSelected() {
    this.disabled = true;
    let reqPayload = {
      "vendorId": this.id,
      "status": this.status,
      "remark": ""
    }
    if (this.reason) {
      reqPayload['remark'] = this.reason;
    }
    this.ProductListService.updateSellerStatus(reqPayload).subscribe(
      (payload) => {
        let response = JSON.parse(JSON.stringify(payload));
        this.disabled = false;
        if (reqPayload['remark']) {
          this.matDialog.closeAll();
        }
        if (!response.error) {
          this.toastr.success(response.message);
        }
        else {
          this.toastr.error(response.message);
        }
        this.getAllSellerList();
      },
      (error: any) => {
        if (reqPayload['remark']) {
          this.matDialog.closeAll();
        }
        this.disabled = false;
        this.toastr.error(error.status + " : " + error.statusText);
      }

    )
  }


  getPrivateURL(fileName: string) {
    if (!fileName) {
      this.toastr.warning("No file found");
      return;
    }
    let params = {
      fileName: fileName
    }
    this.ProductListService.getVendorPrivateFileURL(params)
      .subscribe((payload) => {
        let response = JSON.parse(JSON.stringify(payload));
        if (!response.error) {
          this.openURL(response.data.fileUrl);
        }
        else {
          this.toastr.error(response.message);
        }
      }, (error) => {
        this.toastr.error(error.status + " : " + error.statusText);
      });
  }


  openURL(url: string) {
    window.open(url, '__blank');
  }

  @ViewChild('popup') popup: TemplateRef<any>;

  openPopup() {
    let dialogRef = this.matDialog.open(this.popup, {
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(() => {
      if (!this.disabled2) {
        this.getAllSellerList();
      }
      this.disabled2 = false;
    });
  }

  rejectDocument() {
    if (!this.reason) {
      this.toastr.warning("please provide reason.");
      return;
    }
    this.disabled2 = true;
    this.onOptionsSelected();
  }

  routeAction(item: MatSelectChange, id: any) {
    this.id = id;
    this.status = item.value;
    switch (item.value) {
      case 'Approved':
        this.onOptionsSelected();
        break;
      case 'Rejected':
        this.openPopup();
        break;
    }
  }

}
