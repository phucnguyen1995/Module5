import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CreateCustomerComponent } from './components/customer/create-customer/create-customer.component';
import { DeleteCustomerComponent } from './components/customer/delete-customer/delete-customer.component';
import { EditCustomerComponent } from './components/customer/edit-customer/edit-customer.component';
import { ListCustomerComponent } from './components/customer/list-customer/list-customer.component';
import { ViewCustomerComponent } from './components/customer/view-customer/view-customer.component';
import { CreateEmployeeComponent } from './components/employee/create-employee/create-employee.component';
import { DeleteEmployeeComponent } from './components/employee/delete-employee/delete-employee.component';
import { EditEmployeeComponent } from './components/employee/edit-employee/edit-employee.component';
import { ListEmployeeComponent } from './components/employee/list-employee/list-employee.component';
import { ViewEmployeeComponent } from './components/employee/view-employee/view-employee.component';
import { CreateServiceComponent } from './components/service/create-service/create-service.component';
import { DeleteServiceComponent } from './components/service/delete-service/delete-service.component';
import { EditServiceComponent } from './components/service/edit-service/edit-service.component';
import { ListServiceComponent } from './components/service/list-service/list-service.component';
import { ViewServiceComponent } from './components/service/view-service/view-service.component';
import { CreateContractComponent } from './components/contract/create-contract/create-contract.component';
import { DeleteContractComponent } from './components/contract/delete-contract/delete-contract.component';
import { EditContractComponent } from './components/contract/edit-contract/edit-contract.component';
import { ListContractComponent } from './components/contract/list-contract/list-contract.component';
import { ViewContractComponent } from './components/contract/view-contract/view-contract.component';
import { CreateContractDetailComponent } from './components/contract-detail/create-contract-detail/create-contract-detail.component';
import { ListContractDetailComponent } from './components/contract-detail/list-contract-detail/list-contract-detail.component';
import { HomeComponent } from './components/home/home.component';


// @ts-ignore

@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    DeleteCustomerComponent,
    EditCustomerComponent,
    ListCustomerComponent,
    ViewCustomerComponent,
    CreateEmployeeComponent,
    DeleteEmployeeComponent,
    EditEmployeeComponent,
    ListEmployeeComponent,
    ViewEmployeeComponent,
    CreateServiceComponent,
    DeleteServiceComponent,
    EditServiceComponent,
    ListServiceComponent,
    ViewServiceComponent,
    CreateContractComponent,
    DeleteContractComponent,
    EditContractComponent,
    ListContractComponent,
    ViewContractComponent,
    CreateContractDetailComponent,
    ListContractDetailComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
