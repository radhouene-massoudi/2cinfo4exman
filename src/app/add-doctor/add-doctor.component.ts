import { Component, OnInit } from '@angular/core';
import {DoctorService} from "../service/doctor.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  constructor(private doct:DoctorService,
              private router:Router) { }

  ngOnInit(): void {

  }
  savedata(f:any){
this.doct.adddoctor(f).subscribe(
  ()=>{
   this.router.navigate(['home'])
  }
);
  }
}
