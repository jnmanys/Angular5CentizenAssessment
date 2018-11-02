import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './employee/create-employee.component';
import { EmployeeListComponent } from './employee/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { EmployeeService } from './employee/employee.service';

const appRoutes: Routes = [
  { path: 'create', component: CreateEmployeeComponent },
  { path: 'list', component: EmployeeListComponent },
  { path: 'pagenotfound', component: PageNotFoundComponent },
  { path: '', redirectTo: 'create', pathMatch: 'full' },
  { path: '**', redirectTo: 'pagenotfound' }
];

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
