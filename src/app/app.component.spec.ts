import { NO_ERRORS_SCHEMA }          from '@angular/core';
import { TestBed, async,inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DeviceComponent } from './device.component';
import { myDevicesComponent } from './mydevices.component';

import { RouterModule }   from '@angular/router';
import {Location} from '@angular/common';



import { fakeAsync, tick} from '@angular/core/testing';
import {RouterTestingModule} from "@angular/router/testing";
import {Router} from "@angular/router";
import { Routes } from '@angular/router';
import {getTestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';


describe('AppComponent', () => {
     let router: Router;
	 let location: Location;   
	 let fixture;


  beforeEach(async(() => {
	  
	 
	  TestBed.configureTestingModule({
		 
	  imports: [RouterTestingModule],
	  
      declarations: [
        AppComponent,
		DeviceComponent,
		myDevicesComponent
      ],
	  
	  schemas:[ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));
     

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
   it('should jump to the /home path when / is accessed', function() {
    browser().navigateTo('#/');
    expect(browser().location().path()).toBe("/home");
  });


    it('Should navigate to Device', (done) => {   
        router.navigate(['device']).then(() => {
            expect(location.path()).toBe('/device');
            done();
        }).catch(e => done.fail(e));
    });
  
  it('Should navigate to mydevices', (done) => {    
        router.navigate(['mydevices']).then(() => {
            expect(location.path()).toBe('/mydevices');
            done();
        }).catch(e => done.fail(e));
    });
});
