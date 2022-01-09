import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  id: number;
  date:string;
  amount: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id:1, date: '10 feb 2021', name:'Ram', amount: 300},
  {id:2, date: '10 march 2021', name:'Sam', amount: 400},
  {id:3, date: '10 jan 2021', name:'Rushi', amount: 100},
  {id:4, date: '10 july 2021', name:'John', amount: 150 },
  {id:5, date: '10 jan 2021', name:'dolly', amount: 200},
  
];

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  displayedColumns: string[] = ['id','date', 'name', 'amount'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
