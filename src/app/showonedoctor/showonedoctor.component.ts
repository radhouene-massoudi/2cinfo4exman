import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Doctor} from "../doctor";

@Component({
  selector: 'app-showonedoctor',
  templateUrl: './showonedoctor.component.html',
  styleUrls: ['./showonedoctor.component.css']
})
export class ShowonedoctorComponent implements OnInit {
@Input()d!:any;
@Output() sendid =new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log(this.d);
  }
  sendIdToparent(i:any){
    this.sendid.emit(i);
  }
}
