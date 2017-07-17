import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  title="kjk" ;
  app = this;
  constructor(private _formBuilder:FormBuilder) { 
    this.createForm();
    // username = this.form.controls.username;
  }

  createForm (){
    this.form = this._formBuilder.group({
      firstname:'',
      email:'',
      contact:'',
      username:'',
      password:'',
      confirmpwd:'',
    });
  }

  register(){
    // console.log(this.form.value)
    
  }

  ngOnInit() {
  }

}
