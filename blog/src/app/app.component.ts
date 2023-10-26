import { Component } from '@angular/core';
import {NgForm} from'@angular/forms';
import { FormControl,FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog Angular 12';

  // loginForm= new FormGroup({
  //   user: new FormControl('',[Validators.required,Validators.email]),
  //   password:new FormControl('',[Validators.required,Validators.minLength(5)])
  // })
  // get user(){
  //   return this.loginForm.get('user');
  // }
  // get password(){
  //   return this.loginForm.get('password');
  // }
  // loginUser(){
  //   console.warn(this.loginForm.value);
  // }

  // userLogin(item:any){
  //   console.warn(item)
  // }

  // user={
  //   name:'Jayesh',
  //   Page:29
  // }

  // date=Date();
  // capString(item:string){
  //   return item.toUpperCase();
  // }

 
  // data:{name:String,phone:number}={name:'jayesh',phone:565656};
  // item:string[]=["hello","hi","Jayesh"]
  // itemttwo:number| string=20;
  // itemThree:number[]=[20,50,60,42,89];
  // getData(item:{name:string,phone:string}){
  //   if(typeof item==="number"){
  //     return item*20;
  //   }
  // }

  // getVal(item:HTMLInputElement){
  //   console.warn(item);
  // }

  // name:any;

  // data=""
  // childTwo(item:string){
  //   console.warn(item);
  //   this.data=item;
  // }

  // userDetails=[
  //       {name:'Anil',email:'anil@gmail.com',},
  //       {name:'Pradip',email:'pradip@gmail.com',},
  //       {name:'Rahul',email:'rahul@gmail.com',},
  //       {name:'Ravi',email:'ravi@gmail.com',},
  //       {name:'Jayesh',email:'jayesh@gmail.com',}
  // ]


  // data=10;
  // updateChild(){
  //   this.data=Math.floor(Math.random()*10) ;
  // }


  // list:any[]=[];
  // addTask(item:String){
  //   console.warn(item)
  //   this.list.push({id:this.list.length,name:item})
  // }
  // removeTask(id:number){
  //   console.warn(id)
  //   this.list=this.list.filter(item=>item.id!==id)
  // }

 
  // userData:any={};
  // getData(data:NgForm){
  //   console.warn(data);
  //   this.userData=data;
  // }

  // colortwo="red";
  // bgcolor="green";
  // updatecolor(){
  //   this.colortwo="blue"
  //   this.bgcolor="grey"
  // }

//  Users=[
//     {name:'Anil',email:'anil@gmail.com',socialAccounts:['facebook','insta','gmail']},
//     {name:'Pradip',email:'pradip@gmail.com',socialAccounts:['youtube','insta','gmail']},
//     {name:'Rahul',email:'rahul@gmail.com',socialAccounts:['facebook','linkdln','whatshapp']},
//     {name:'Ravi',email:'ravi@gmail.com',socialAccounts:['google','insta','gmail']},
//     {name:'Jayesh',email:'jayesh@gmail.com',socialAccounts:['yahoo','insta','gmail']}
//   ]

  // users=['Anil','Pradip','Rahul','Ravi','Jayesh'];
  // userDetails=[
  //   {name:'Anil',email:'anil@gmail.com',phone:'8888'},
  //   {name:'Pradip',email:'pradip@gmail.com',phone:'5555'},
  //   {name:'Rahul',email:'rahul@gmail.com',phone:'3333'},
  //   {name:'Ravi',email:'ravi@gmail.com',phone:'7777'},
  //   {name:'Jayesh',email:'jayesh@gmail.com',phone:'2626'}
  // ]

  // color1="xyz"
  // color="red"

  // name="Jayesh"
  // show=false
  // showchange(){
  //   this.show=!this.show;
  // }
 // data ="code step by step"
  // disable=true
  // chagevalue(){
  //   this.disable=!this.disable;
  // }

  // count=0;
  // counter(val:String){
  //   val==='Add'?this.count++:this.count--;

  // }
  // displayVal:String='';
  // getValue(val:String){
  //   console.warn(val);
  //   this.displayVal=val;
  // }
  // getValue(){
  //   return "Get Function data"
  // }
  // getName(){
  //   alert("function called");
  // }
  // getNametwo(Name:String,secondname:string){
  //   alert(Name);
  //   alert(secondname);
  // }
  // getData(val:String){
  //   console.warn(val);
  // }

}
