import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http:HttpClient) { }
  getdoctors() {
    return this.http.get('http://localhost:3000/doctor')
  }

  adddoctor(data:any) {
    return this.http.post('http://localhost:3000/doctor', data)
  }
  deldoctor(id:any) {
    return this.http.delete('http://localhost:3000/doctor/'+id)
  }
}
