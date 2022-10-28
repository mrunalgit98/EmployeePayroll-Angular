
export class Employee {
   name:string = "";
   profilePic:string = "";
   gender:string = "";
   salary:number = 0;
   department:Array<any> = [];
   date:Date;
   note:string = "";

   constructor(name:string, date:Date, profilePic:string,gender:string, department:Array<any>,note:string, salary:number){
       this.name = name;
       this.date = date;
       this.department = department;
       this.profilePic = profilePic;
       this.note = note;
       this.salary =salary;
       this.gender = gender;
   }
}