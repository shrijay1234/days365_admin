import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PromoterService } from '../../services/promoter.service';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-view-registration-promoter',
  templateUrl: './view-registration-promoter.component.html',
  styleUrls: ['./view-registration-promoter.component.css']
})
export class ViewRegistrationPromoterComponent implements OnInit {
  promoterRegisterForm: FormGroup;
  submitted:boolean= false;

  error_messages = {
    'Name': [
      { type: 'required', message: 'Name is required.' },
    ],

    'Email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'minlength', message: 'Email length.' },
      { type: 'maxlength', message: 'Email length.' },
      { type: 'required', message: 'please enter a valid email address.' }
    ],
    'userName': [
      { type: 'required', message: 'User Name is required.' }
    ],

    'mobileNumber': [
      { type: 'required', message: 'number is required.' },
      { type: 'minlength', message: 'number length.' },
      { type: 'maxlength', message: 'number length.' }
    ],
    'Address': [
      { type: 'required', message: 'address is required.' },
      // { type: 'minlength', message: 'address length.' },
      // { type: 'maxlength', message: 'address length.' }
    ],

    'Password': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.' }
    ],

    'confirmpassword': [
      { type: 'required', message: 'Confirm Password is required.' },
      { type: 'minlength', message: 'Confirm Password length.' },
      { type: 'maxlength', message: 'Confirm Password length.' }
    ],
  }
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private PromoterService:PromoterService,
    private router: Router,
    public dialog: MatDialog,
    private local: LocalStorageService){
      let accessToken = this.local.retrieve('accessToken');
      let type = this.local.retrieve('type');
      if (!accessToken || type !== 'admin') {
        this.router.navigateByUrl('/');
      }
     }
             
 
  ngOnInit(): void {this.promoterRegisterForm = this.formBuilder.group({
    Name: new FormControl('', Validators.compose([
      Validators.required
    ])),
    userName: new FormControl('', Validators.compose([
      Validators.required
    ])),
    Email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(30)
    ])),

    mobileNumber: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10)
    ])),
   Address:  new FormControl('', Validators.compose([
    Validators.required,
    // Validators.minLength(8),
    // Validators.maxLength(20)

   ])),
    Password: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(30)
    ])),
    confirmpassword: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(30)
    ])),
  }, { 
    validators: this.password.bind(this)
  });
  }


password(formGroup: FormGroup) {
  const { value: password } = formGroup.get('Password');
  const { value: confirmPassword } = formGroup.get('confirmpassword');
  return password === confirmPassword ? null : { passwordNotMatch: true };
}

onSubmit()
{
  this.submitted = true;
  if(this.promoterRegisterForm.valid){
    console.log(this.promoterRegisterForm.value);
    this.PromoterService.promoterRegistration(this.promoterRegisterForm.value).subscribe(
      (response:any) => {
        if(response.message =="Account already exists."){
          this.toastr.success(response.message);
        }else if(response.message =="Successfully Promoter Registered"){
          this.toastr.success(response.message);
          const dialogRef = this.dialog.closeAll();  
          window.location.reload();            
          //this.router.navigateByUrl('/register-promoter');
        }else{
          this.toastr.success(response.message);
        }
      },
      (error:any) => {
        console.log(error);
        this.toastr.error(error.status + " : " + error.statusText);
      }
      
    )
  }
}

}