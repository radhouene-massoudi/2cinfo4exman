import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ShowonedoctorComponent } from './showonedoctor/showonedoctor.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { DeldoctorComponent } from './deldoctor/deldoctor.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDoctorComponent,
    HomeComponent,
    NotfoundComponent,
    ShowonedoctorComponent,
    DeldoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
