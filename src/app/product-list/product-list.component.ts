import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
 
  image:string;
  Stock:number;
  id:number;

}
const ELEMENT_DATA: PeriodicElement[] = [
  {id:1,name: 'Tanu',image:'Product', Stock:8806968390 },
  {id:2,name: 'Maahi',image:'Product',Stock:8806968390},
  {id:3,name: 'Sakshi',image:'Product',Stock:8806968390},
  {id:4,name: 'Mohit',image:'Product',Stock:8806968390},
  {id:5,name: 'Gunjan',image:' Product',Stock:8806968390},
];

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  displayedColumns: string[] = ['id','name', 'image','Stock', 'columndelete','columnedit'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
