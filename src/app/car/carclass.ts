import { Icarclass } from "./icarclass";
//import { EmailValidator } from "@angular/forms";

export class Carclass implements Icarclass{
    constructor(public uname:string,public pwd:number ,public email:string,public type:string){
        uname=this.uname;
        pwd=this.pwd;
        email=this.email;
        type=this.type;
        console.log("constructor carclass");
    }
}

