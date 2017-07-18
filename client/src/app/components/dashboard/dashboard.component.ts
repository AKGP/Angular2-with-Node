import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Http} from '@angular/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    _users = [];
    constructor(private http:Http,private authService:AuthService) {
    
    
   }
  
  
  ngOnInit() {
    this.authService.getUser().subscribe(users=>{
      this._users = users;
    });
}

}
