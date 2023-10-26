import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  login(uname:string,pwd:string){
    if(uname==='jayesh'&&pwd==='2606'){
      return 200;
    }else{
      return 403;
    }
  }
}
