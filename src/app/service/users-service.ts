import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http:HttpClient){}

  getUsers() : Observable<User[]>{
    const url ="https://localhost:7012/api/Student";
    return this.http.get<User[]>(url);
  }
  saveUsers(user:User) : Observable<User>{
    const url ="https://localhost:7012/api/Student";
    return this.http.post<User>(url,user);
  }
  deleteUser(id:string):Observable<User>{
      
    
    const url ="https://localhost:7012/api/Student";
       return this.http.delete<User>(url +"/"+id)
  }
  selectUser(id:string):Observable<User>{
      
    
    const url ="https://localhost:7012/api/Student";
       return this.http.get<User>(url +"/"+id)
  }
  
}
