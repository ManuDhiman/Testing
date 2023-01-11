import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userData:any={};

  getData(data:NgForm)
  {
    console.warn(data)
    this.userData=data
  }
  // users=['ankit','ishan','prayag','mohit','fazan'];
  // UserDetails=[
  //   {name:"ankit",ID:"101",Phone:"8888",email:"ankit@things.com"},
  //   {name:"ishan",ID:"102",Phone:"7777",email:"ishan@things.com"},
  //   {name:"prayag",ID:"103",Phone:"6666",email:"prayaga@things.com"},
  //   {name:"mohit",ID:"104",Phone:"5555",email:"mohit@things.com"},
  //   {name:"fazan",ID:"105",Phone:"5555",email:"fazan@things.com"}
  // ]
  // color="red"
  // bgcolor="yellow"

  // updatecolor()
  // {
  //   this.color="yellow";
  //   this.bgcolor="red";
  }

