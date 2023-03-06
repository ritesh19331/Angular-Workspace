import { EmployeeContract } from "../contract/employeeContract";

export abstract class EmployeeTemplate implements EmployeeContract {

   public FirstName: string = "";
   public  LastName: string = "";
   public Designation: string = "";
   public Print() : void {

   }
}