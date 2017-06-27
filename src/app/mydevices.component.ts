import { Component,Input} from '@angular/core';
import { Routes } from '@angular/router';
@Component({
  selector: 'mydevices',
 template: `
    <h1>mydevices</h1>
	<div>Name: {{element.name}}</div>
	<div>Email: {{element.email}}</div>
	<div>Gender: {{element.gender}}</div>
	<div>Age : {{element.age}}</div>
	
  `,
})
export class myDevicesComponent {
	@Input() element: {name:string,email:string,gender:string,age:string};
	
 }