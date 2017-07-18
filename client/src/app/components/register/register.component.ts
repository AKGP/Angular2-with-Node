import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  app = this;
  constructor(private _formBuilder:FormBuilder,private authService:AuthService) { 
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
    
    const data = {
      firstname:this.form.value.firstname,
      username:this.form.value.username,
      password: this.form.value.password,
      email:this.form.value.email,
      contact:this.form.value.contact,
      confirmpwd:this.form.value.confirmpwd
    }
    console.log(data)
    this.authService.registerUser(data).subscribe(data=>{
      console.log(data);
    });
    
  }

  ngOnInit() {
  }

}
