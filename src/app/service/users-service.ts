import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http:HttpClient){}

  getUsers(){
    const url ="https://localhost:7012/api/Student";
    return this.http.get(url);
  }
  
}
