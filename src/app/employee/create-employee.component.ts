import {Component, OnInit} from "@angular/core";
import { EmployeeService } from "./employee.service";
import { Router } from '@angular/router';

@Component({
    selector: "create-employee-component",
	templateUrl: "./create-employee.component.html",
	styleUrls: ["./create-employee.component.css"]
})

export class CreateEmployeeComponent implements OnInit {

    constructor(private _employeeService: EmployeeService,
                private _router: Router){}

    ngOnInit(){}

    handleCreateFormSubmit(employeeData){
        this._employeeService.changeData(employeeData);
        this._router.navigate(['/list']);
    }
}