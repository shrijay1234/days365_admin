import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  fname: string;
  uname: string;
  address: string;
  DOB:string;
  gender:string;
  mob:number;
  id:number;

}
const ELEMENT_DATA: PeriodicElement[] = [
  {id:1,fname: 'Rushi',uname: 'Rushi',gender:'male',DOB:'10 Jan 2000',mob:8806968390,address:'  Street, Near Station, Ahmedabad, 5083 ' },
 
  
];
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  displayedColumns: string[] = ['id','fname', 'uname','gender','DOB','mob', 'address','columnedit'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
