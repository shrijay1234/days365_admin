import { Component, OnInit } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';


export interface PeriodicElement {
  name: string;
  date: string;
  gmail:string;
  mob:number;
  id:number;

}
const ELEMENT_DATA: PeriodicElement[] = [
  {id:1,name: 'Rushi',gmail:'rushijankar1999@gmail.com',mob:8806968390,date: '10 jan 2021' },
  {id:2,name: 'Ram',gmail:'rushijankar1999@gmail.com',mob:8806968390,date: '14 feb 2021'},
  {id:3,name: 'Rahul',gmail:'rushijankar1999@gmail.com',mob:8806968390,date: '17 feb 2021'},
  {id:4,name: 'Sam',gmail:'rushijankar1999@gmail.com',mob:8806968390,date: '26 march 2021'},
  {id:5,name: 'Raj',gmail:'rushijankar1999@gmail.com',mob:8806968390,date: '2 jan 2021'},
  
];



@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  displayedColumns: string[] = ['id','name', 'date','gmail','mob', 'columnview','columnselect','columnedit','columndelete'];
  dataSource = ELEMENT_DATA;

  
  constructor() { }

  ngOnInit(): void {
    
  }

}

