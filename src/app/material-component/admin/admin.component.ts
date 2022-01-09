import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
 
  order: number;
  customer:number;
  service:number;
  
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {order:1, customer:14,service:4},
  
  
];
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  displayedColumns: string[] = ['order', 'customer','service'];
  // displayedColumns: string[] = ['order'];
  dataSource = ELEMENT_DATA;
  
  constructor() { }

  ngOnInit(): void {
  }

}
