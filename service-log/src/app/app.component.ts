import { Component } from '@angular/core';
import { UserdataService } from './serviceapi/userdata.service';
interface dataType{
  name:string,
  id:number,
  indian:string,
  addres:any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service-log';
  getData(){
    const data:dataType={
      name:'Jayesh Panchasara',
      id:100,
      indian:"yes",
      addres:'18,shukun taunship ,chamaraj'

    }
  }
 

  // users:any;
  // constructor(private userData:UserdataService ){
  //   userData.users().subscribe((data)=>{
  //     console.warn("dara",data);
  //     this.users=data;
  //   })
  // }
  // results:any;
  // getUserFormData(data:any){
  //   console.warn(data);
  //   this.userData.saveUsers(data).subscribe((result)=>{
  //     console.warn(result);
  //     this.results=result;
  //   })

  // }
  
  // user:any;
  // constructor(private userData:UserdataService){
  //   console.warn("userData",userData.users())
  //   this.user=userData.users();
  // }

  // users=[
  //   {name:'jayesh',email:"jayesh@gmail.com",phone:'88562'},
  //   {name:'pradip',email:"pradip@gmail.com",phone:'65465'},
  //   {name:'ravi',email:"ravi@gmail.com",phone:'12318'},
  //   {name:'rahul',email:"rahul@gmail.com",phone:'98716'}
    
  // ]
}
