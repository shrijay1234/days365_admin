import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  password: string;
  mob:number;
  id:number;

}
const ELEMENT_DATA: PeriodicElement[] = [
  {id:1,password: 'Rushi@123',mob:8806968390 },
  {id:2,password: 'Rushi@123',mob:8806968390},
 
  
];
@Component({
  selector: 'app-viewpass',
  templateUrl: './viewpass.component.html',
  styleUrls: ['./viewpass.component.css']
})
export class ViewpassComponent implements OnInit {
  displayedColumns: string[] = ['id','password','mob'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
