import { Component, OnInit } from '@angular/core';
import {DoctorService} from "../service/doctor.service";

@Component({
  selector: 'app-deldoctor',
  templateUrl: './deldoctor.component.html',
  styleUrls: ['./deldoctor.component.css']
})
export class DeldoctorComponent implements OnInit {

  constructor(private s:DoctorService) { }

  ngOnInit(): void {
  }

}
