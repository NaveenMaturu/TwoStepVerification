import { Component } from '@angular/core';
import { Routes } from '@angular/router';
@Component({
  selector: 'home',
  template: `
    <h1>home</h1>
	Name:	<input type ="text" [(ngModel)]="name"/><br>

	Email: <input type ="text" [(ngModel)]="email"/>
	<button name="a" (click)="next()">Next</button>
	
	
	<device *ngIf="a==true" [element]="res"></device>
	
  `,
  styleUrls: ['./app.component.css']
})
export class  HomeComponent {
	constructor () {};
	name='';
	email='';
	res={};
	a;
   next()
   {
	   
	   //alert(this.name+""+this.email)
	   this.res={"name":this.name,"email":this.email};
	   //this.res.push({name:this.name,email:this.email});
	   alert(JSON.stringify(this.res))
	  this.a=true;
   }
}