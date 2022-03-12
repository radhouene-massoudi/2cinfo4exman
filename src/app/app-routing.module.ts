import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddDoctorComponent} from "./add-doctor/add-doctor.component";
import {HomeComponent} from "./home/home.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {DeldoctorComponent} from "./deldoctor/deldoctor.component";

const routes: Routes = [
  {path:'addD',component:AddDoctorComponent},
  {path:'home',component:HomeComponent},
  {path:'del/:id',component:DeldoctorComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
