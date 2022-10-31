import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { FormComponent } from '../form/form.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  allEmp:Array<any> = [];

  countNumber:any = 0;
 

  constructor(private router:Router,private service:EmployeeService) { }
 employee :any;
 
  ngOnInit() {

     this.getAll();

  }

onAddUser(){

  this.router.navigate(["form"]);

}

getAll(){
 
  this.service.getAll().subscribe((data:any)=>{
    console.log(data);
     this.allEmp=data;
    this.countNumber=this.allEmp.length;
  });
}


editById(Id:number){
  this.router.navigate(['update',Id]);
}


deleteEmp(Id:number ){
  console.log("id number",Id)
  this.service.deleteById(Id).subscribe((data:any) =>{
    this.ngOnInit();
    this.router.navigate(['dashboard']);      
  });
}
}
