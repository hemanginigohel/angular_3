import { Component, OnInit,OnChanges,DoCheck } from '@angular/core';
import {  Carclass} from "./carclass";
import { Icarclass} from "./icarclass";
//import { stringify } from '@angular/compiler/src/util';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit , OnChanges,DoCheck{
 
  user=[];
  public uname;
  public pwd;
  public email;
  public type;
  constructor() { }
  
   ngOnInit() {
    console.log('ngOnInit_car');
  }
  ngOnChanges(){
    console.log('ngOnChanges_car');
  }
  ngDoCheck(){
    console.log('ngDoCheck_car');
  }
  ngOnDestroy(){
    console.log('ngOnDestory_car');
  }
 
  onclick(value) {
    
    let myuser:Icarclass;
    myuser=new Carclass(this.uname,this.pwd,this.email,this.type);
    const add={
     uname:this.uname,
     pwd:this.pwd,
     email:this.email,
      type:this.type
    }
    this.user.push(add);
    console.log(add);
    console.log('onclick ');
      }
      

}
