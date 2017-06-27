import { Component,Input} from '@angular/core';
import { Routes } from '@angular/router';
@Component({
  selector: 'device',
 template: `
 <p>{{element.name}}</p>
	<p>{{element.email}}</p>
    <h1>Device</h1>
	Gender  :	<input type ="text" [(ngModel)]="gender"/>
	Age    : <input type ="text" [(ngModel)]="age"/>
	
	<button name="a" (click)="add()">Button</button>
	<mydevices *ngIf="a==true" [element]="b"></mydevices>
	
  `,
})
export class DeviceComponent {
	@Input() element:{name:string,email:string};
	constructor(){};
	gender='';
	age='';
	a;
	b = {};
	add()
	{
		alert(this.gender+""+this.age);
		this.b={"name":this.element.name,"email":this.element.email,"gender":this.gender,"age":this.age};
		this.a=true;
	}
	

	
	 
 }