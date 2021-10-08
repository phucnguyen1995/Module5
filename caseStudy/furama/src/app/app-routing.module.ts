import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home/home.component";
import {ListCustomerComponent} from "./components/customer/list-customer/list-customer.component";
import {CreateCustomerComponent} from "./components/customer/create-customer/create-customer.component";
import {EditCustomerComponent} from "./components/customer/edit-customer/edit-customer.component";
import {ViewCustomerComponent} from "./components/customer/view-customer/view-customer.component";

const routes: Routes = [
  {path:'',component:HomeComponent},

  {path:'customer-list',component:ListCustomerComponent},
  {path:'customer-create',component:CreateCustomerComponent},
  {path:'customer-edit/:id',component:EditCustomerComponent},
  {path:'customer-view/:id',component:ViewCustomerComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
