import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "./employee.service"

@Component({
    selector: "employee-list-component",
    templateUrl : "./employee-list.component.html",
    styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {

    employeeList;

    constructor(private _employeeService: EmployeeService){}

    ngOnInit(){
        this._employeeService.currentData.subscribe(data => this.employeeList = data);
    }

}