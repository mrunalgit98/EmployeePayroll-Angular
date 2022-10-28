import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {



  constructor(private http:HttpClient) { }

add(employee :any){

  return this.http.post("http://localhost:8081/AddEmployee",employee);

}

getAll(){
  return this.http.get("http://localhost:8081/getEmployee");
}

}
