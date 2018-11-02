import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class EmployeeService {

    employees = [
        {
            firstName: "Jack",
            lastName: "Jones",
            email: "jack@gmail.com"
        },
        {
            firstName: "Steve",
            lastName: "Stock",
            email: "hames@gmail.com"
        },
        {
            firstName: "Jim",
            lastName: "Carrey",
            email: "tim@gmail.com"
        }
    ]

    private initialData = new BehaviorSubject(this.employees);
    currentData = this.initialData.asObservable();

    changeData(data){
        const updatedData = [...this.initialData.value, data];
        this.initialData.next(updatedData);
    }
}