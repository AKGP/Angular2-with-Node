import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthService {
  domain = 'http://localhost:8080';
  constructor(private http:Http) { }
  registerUser(user){
    return this.http.post(this.domain+'/api/register',user).map(res=>res.json());
  }
  getUser(){

    return this.http.get(this.domain+'/api/dashboard').map(res => res.json());

  }
}
