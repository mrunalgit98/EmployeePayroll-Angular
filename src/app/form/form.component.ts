import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
 

  tempArr : Array<any> =[];
  depart2: any = ["HR", "Sales", "Engineer", "Finance", "Other"];

  Id:any = this.route.snapshot.paramMap.get("Id");

  constructor(private router:Router,private empService:EmployeeService,private route:ActivatedRoute) { }

    employee: Employee = new Employee("", new Date," ","", [], "",0);

 

    checkBoxChange(dptname:any){

      if(!this.tempArr.includes(dptname)){
        this.tempArr.push(dptname);
      }
      else{
        const index = this.tempArr.indexOf(dptname);
        if (index > -1) { // only splice array when item is found
          this.tempArr.splice(index, 1); // 2nd parameter means remove one item only
        }
      }
    }
  
 
onSubmit(){
  console.log(this.employee);
    this.employee.department=this.tempArr;
  this.empService.add(this.employee).subscribe((data:any)=>{
    this.router.navigate(["dashboard"]);

  });
  

}

 onCancel(){
   this.router.navigate(["dashboard"]);

 }

 updateEmployeeData() {
   this.employee.department = this.tempArr;
  this.empService.updateEmployeeById(this.employee, this.Id).subscribe((data: any) => {
  this.router.navigate(["dashboard"]);
  });

 }
ngOnInit(): void {
  
  this.getEmployeeById(); 

}

getEmployeeById(){    
  
 
  this.empService.getEmployeeById(this.Id).subscribe((data:any) => {
    console.log(data);
    this.employee = data;
    
    
  });


}
}

