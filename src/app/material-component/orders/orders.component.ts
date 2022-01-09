import { Component, OnInit } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';


export interface PeriodicElement {
  name: string;
  id: number;
  date:string;
  order: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id:1, name:'Ram',date: '10 feb 2021', order:4},
  {id:2, name:'Ram',date: '10 march 2021',  order:0},
  {id:3, name:'Ram',date: '10 jan 2021',  order:0},
  {id:4, name:'Ram',date: '10 july 2021', order:0},
  {id:5, name:'Ram',date: '10 jan 2021',  order:0},
  
];

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  displayedColumns: string[] = ['id','name', 'date', 'order','columndelete','columnedit'];
  dataSource = ELEMENT_DATA;
  

  constructor() { }

  ngOnInit(): void {
  }

}
