import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { NgxSliderModule } from '@angular-slider/ngx-slider/slider.module';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  tempArr : Array<any> =[];
  depart2: any = ["HR", "Sales", "Engineer", "Finance", "Other"];
  constructor(private router:Router,private empService:EmployeeService,private route:ActivatedRoute) { }

    employee: Employee = new Employee("", new Date," ","", [], "",0);
    // getVal(value: any) {
    //   console.log(value);
    //   this.employee.department = value();
    // }
  

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
  

    formatLabel(value: number) {
      if (value >= 1000) {
        return Math.round(value / 1000) + 'k';
      }
  
      return value;
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

 

}


// addEmployee() {
//   console.log(this.employee);
//   this.employee.department = this.tempArr;
//   //subscribe is used to add data in the db from the constructor
//   this.employeeService.insertEmployee(this.employee).subscribe((data: any) => {
//     this.router.navigate(["dashboard"]);
//   });
// }