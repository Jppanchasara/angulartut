import { Component } from '@angular/core';
import { UserdataService } from '../service/userdata.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  user:any;
  constructor(private userData:UserdataService){
    console.warn(userData.users());
    this.user=userData.users();

  }

  // users=[
  //   {name:'jayesh',email:"jayesh@gmail.com",phone:'88562'},
  //   {name:'pradip',email:"pradip@gmail.com",phone:'65465'},
  //   {name:'ravi',email:"ravi@gmail.com",phone:'12318'},
  //   {name:'rahul',email:"rahul@gmail.com",phone:'98716'}
    
  // ]
}
