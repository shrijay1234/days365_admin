import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  image: string;
  id:number;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {id:1,name: 'Tanu', image:'category' },
  {id:2,name: 'Ram', image:'category'},
  {id:3,name: 'Rahul', image:'category'},
  {id:4,name: 'Maahi', image:'category'},
  {id:5,name: 'Raj', image:'category'},
  
];
@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {
  displayedColumns: string[] = ['id','name', 'image','columnedit', 'columndelete',];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
