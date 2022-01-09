import { Component, OnInit } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';


export interface PeriodicElement {
  name: string;
  id:number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id:1,name: 'category1'},
  {id:2,name: 'category2'},
  {id:1,name: 'category1'},
  {id:2,name: 'category2'}
 

];


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  displayedColumns: string[] = ['id','name', 'columnselect','columnedit','columndelete'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
