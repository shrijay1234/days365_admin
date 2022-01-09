import { Component,ViewChild, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ViewRegistrationPromoterComponent } from '../view-registration-promoter/view-registration-promoter.component';
import { PromoterService } from '../../services/promoter.service';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';

export interface PeriodicElement {
  _id: string;
  Name: string;
  Address: string;
  userName: string;
  mobileNumber: string;
  Email:  string;
  AccountNo: string;
  BankName:string;
  IFSCCode:string
}
@Component({
  selector: 'app-register-promoter',
  templateUrl: './register-promoter.component.html',
  styleUrls: ['./register-promoter.component.css']
})
export class RegisterPromoterComponent implements OnInit {
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  dataSource: any;
  displayedColumns: string[] = ['_id', 'Name', 'Email', 'userName','mobileNumber','Address','BankName', 'AccountNo','IFSCCode'];
 
  getAllPromoterList() {
    //let params: JsonObject = { "status": ["Pending"]};
    this.PromoterService.getPromoterList()
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

  constructor(public dialog: MatDialog,
    private PromoterService:PromoterService,
    private local: LocalStorageService,
    private router: Router,
    private toastr: ToastrService) { 

    let accessToken = this.local.retrieve('accessToken');
    let type = this.local.retrieve('type');
    if (!accessToken || type !== 'admin') {
      this.router.navigateByUrl('/');
    }

    this.getAllPromoterList();
  }
  openDialog() {
    const dialogRef = this.dialog.open(ViewRegistrationPromoterComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  ngOnInit(): void {
  }

}
