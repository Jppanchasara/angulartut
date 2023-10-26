import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  url="https://jsonplaceholder.typicode.com/posts";
  urltwo="https://reqres.in/api/users";
  constructor( private http:HttpClient) { }
  users(){
    return this.http.get(this.url);
  }
  saveUsers(data:any){
    return this.http.post(this.urltwo,data)
  }
}
