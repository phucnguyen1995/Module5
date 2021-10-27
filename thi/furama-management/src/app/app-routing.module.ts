import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCustomerComponent} from "./customer/list-customer/list-customer.component";
import {CreateCustomerComponent} from "./customer/create-customer/create-customer.component";
import {EditCustomerComponent} from "./customer/edit-customer/edit-customer.component";

import {HomepageComponent} from "./homepage/homepage.component";
import {DetailComponent} from "./customer/detail/detail.component";


const routes: Routes = [
  {path:'', component: HomepageComponent},

  {path:'customer-list', component: ListCustomerComponent},
  {path:'customer-create', component: CreateCustomerComponent},
  {path:'customer-edit/:id', component: EditCustomerComponent},
  {path:'customer-detail/:id',component:DetailComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
