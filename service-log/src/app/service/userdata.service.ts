import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users(){
    return [
      {name:'jayesh',email:"jayesh@gmail.com",phone:'88562'},
      {name:'pradip',email:"pradip@gmail.com",phone:'65465'},
      {name:'ravi',email:"ravi@gmail.com",phone:'12318'},
      {name:'rahul',email:"rahul@gmail.com",phone:'98716'}
    ]
  }
}
