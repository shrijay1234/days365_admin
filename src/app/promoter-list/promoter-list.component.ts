import { Component,ViewChild, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PromoterService } from '../services/promoter.service';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import{AddBankDetailComponent} from '../add-bank-detail/add-bank-detail.component';

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
  selector: 'app-promoter-list',
  templateUrl: './promoter-list.component.html',
  styleUrls: ['./promoter-list.component.css']
})
export class PromoterListComponent implements OnInit {

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  dataSource: any;
  displayedColumns: string[] = ['_id', 'Name', 'Email', 'userName','mobileNumber','Address','BankName', 'AccountNo','IFSCCode'];
 
  getPromoters() {
    //let params: JsonObject = { "status": ["Pending"]};
    this.PromoterService.getPromoters()
      .subscribe((payload) => {
        var response = JSON.parse(JSON.stringify(payload));
        //console.log("filterValue.........",response);
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
    if (!accessToken || type !== 'promoter') {
      this.router.navigateByUrl('/promoter-login');
    }

    this.getPromoters();
  }

  openDialog(id:any) {
    this.PromoterService.setPromoterId({
     id:id
    });
    const dialogRef = this.dialog.open(AddBankDetailComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
 
  ngOnInit(): void {
  }

}
