import { Component,ViewChild, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddPromoterComponent } from '../add-promoter/add-promoter.component';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PromoterService } from '../../services/promoter.service';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';

export interface PeriodicElement {
  promoterName: string;
  sellerName: string;
  brandName: string;
  promoCode: string;
  percentageOnBrand:string,
  createdAt: string; 
}

@Component({
  selector: 'app-generate-promocode',
  templateUrl: './generate-promocode.component.html',
  styleUrls: ['./generate-promocode.component.css']
})
export class GeneratePromocodeComponent implements OnInit {
  displayedColumns: string[] = ['promoterName', 'sellerName', 'brandName', 'promoCode','percentageOnBrand','createdAt'];
  dataSource: any;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  getAllPromoCodeList() {
    //let params: JsonObject = { "status": ["Pending"]};
    this.PromoterService.getPromoCodeList()
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
      
    this.getAllPromoCodeList();
   }
  openDialog() {
    const dialogRef = this.dialog.open(AddPromoterComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  ngOnInit(): void {
  }

}
