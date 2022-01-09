import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable, of } from 'rxjs';
import { debounceTime, scan, startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'app-add-text-port',
  templateUrl: './add-text-port.component.html',
  styleUrls: ['./add-text-port.component.css']
})
export class AddTextPortComponent implements OnInit {
 
    /** Current value of the input box */
    current = '';
  category='';
    /** 
     * Form control for input element where user types
     * Requires ngModule import of ReactiveFormsModule
     */
    textControl = new FormControl();
  
    /** Observable of array of accumulated user inputs */
    history$: Observable<string[]>;
  
    constructor() {
      this.history$ = this.textControl.valueChanges.pipe(
        debounceTime(500), // wait 1/2 sec until user stops
        startWith(this.current), 
        startWith(this.category), 
        // initial value
        // tap(t => console.log(t)),
        // Accumlate input values; clear when input is empty
        scan((acc, t) => t ? acc.concat(t) : [], [])
      );
    }
  

  ngOnInit(): void {
  }

}
