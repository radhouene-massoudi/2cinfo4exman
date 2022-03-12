import { Component, OnInit } from '@angular/core';
import {DoctorService} from "../service/doctor.service";
import {Doctor} from "../doctor";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
doctor!:any;
  constructor(private s: DoctorService) { }

  ngOnInit(): void {
    this.s.getdoctors().subscribe(
      (d)=>{

        this.doctor=d;
        console.log(this.doctor);
      }
    );

  }
  after(j:any){
this.s.deldoctor(j).subscribe(
  ()=>{
    alert('deleted')
  }
);
  }
}
