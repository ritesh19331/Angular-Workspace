import { EmployeeTemplate } from "../template/EmployeeTemplate";

export default class EmployeeComponent extends EmployeeTemplate {
    public FirstName: string = "Raj Kumar";
    public LastName: string = "Sah";
    public Designation: string= "Manager";
    public Print(): void {
        console.log(`${this.FirstName}\n${this.LastName}`)
    }
}