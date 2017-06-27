import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import { RouterModule }   from '@angular/router';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { DeviceComponent } from './device.component';
import { myDevicesComponent } from './mydevices.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeviceComponent,
    myDevicesComponent	
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	BrowserAnimationsModule, 
	MdButtonModule, 
	MdCheckboxModule,
	MdCardModule,
	RouterModule.forRoot([
	{
    path: '',
    redirectTo: "/home",
    pathMatch: 'full'
  },
	
  {path: 'home',component: HomeComponent},
  {path: 'device',component: DeviceComponent},
  {path: 'mydevices',component: myDevicesComponent}

   ])
	
	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
