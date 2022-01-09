import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: number;
  image: string;
  id:number;
  Amount:number;
  Invoice:number;
  Date:number;
  Code: number;
  ref:string;
  status:string;
  Delivery:string;
  Address:string;
  view:string;
  Login:string;
  Order:string;




}

const ELEMENT_DATA: PeriodicElement[] = [
  {id:1,name: 7645, image:'U.k',Amount:1763, Invoice:763478,Date:2020-11-11, Code:244713, ref:'N/A',status:'(Consignment No.=D7123765/Delivery Status.Delivery)', Delivery:' Manage', Address:'manage', view: 'View', Login:'Active',Order:'' },
  {id:2,name: 7467, image:'U.P',Amount:7645, Invoice:562347,Date:2020-2-11, Code:244715, ref:'N/A',status:'(Consignment No.=D7123765/Delivery Status.Delivery)', Delivery:'Manage', Address:'manage', view:'View', Login:'Blocked',Order:'' },
 
  
];
@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.css']
})
export class ManageOrderComponent implements OnInit {
  displayedColumns: string[] = ['id','name', 'Amount','Invoice', 'Date','image','Code','ref','status','Delivery','Address','view','Login','Order'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
