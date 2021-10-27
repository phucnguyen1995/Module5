import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCustomerComponent} from "./customer/list-customer/list-customer.component";
import {CreateCustomerComponent} from "./customer/create-customer/create-customer.component";
import {ListEmployeeComponent} from "./employee/list-employee/list-employee.component";
import {CreateEmployeeComponent} from "./employee/create-employee/create-employee.component";
import {ListServiceComponent} from "./service/list-service/list-service.component";
import {CreateServiceComponent} from "./service/create-service/create-service.component";
import {ListContractComponent} from "./contract/list-contract/list-contract.component";
import {EditCustomerComponent} from "./customer/edit-customer/edit-customer.component";
import {EditEmployeeComponent} from "./employee/edit-employee/edit-employee.component";
import {EditServiceComponent} from "./service/edit-service/edit-service.component";
import {CreateContractComponent} from "./contract/create-contract/create-contract.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {DetailComponent} from "./customer/detail/detail.component";


const routes: Routes = [
  {path:'', component: HomepageComponent},

  {path:'customer-list', component: ListCustomerComponent},
  {path:'customer-create', component: CreateCustomerComponent},
  {path:'customer-edit/:id', component: EditCustomerComponent},
  {path:'customer-detail/:id',component:DetailComponent},

  {path:'employee-list', component: ListEmployeeComponent},
  {path:'employee-create', component: CreateEmployeeComponent},
  {path:'employee-edit/:id', component: EditEmployeeComponent},

  {path:'service-list', component: ListServiceComponent},
  {path:'service-create', component: CreateServiceComponent},
  {path:'service-edit/:id', component: EditServiceComponent},

  {path:'contract-list', component: ListContractComponent},
  {path:'contract-create', component: CreateContractComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
