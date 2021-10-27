import {NgModule, Pipe} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home/home.component';
import { ListCustomerComponent } from './components/customer/list-customer/list-customer.component';
import { CreateCustomerComponent } from './components/customer/create-customer/create-customer.component';
import { DeleteCustomerComponent } from './components/customer/delete-customer/delete-customer.component';
import { EditCustomerComponent } from './components/customer/edit-customer/edit-customer.component';
import { ViewCustomerComponent } from './components/customer/view-customer/view-customer.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {HttpClientModule} from "@angular/common/http";
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";




@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,

    ListCustomerComponent,
    CreateCustomerComponent,
    DeleteCustomerComponent,
    EditCustomerComponent,
    ViewCustomerComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,


    FormsModule,
    Ng2SearchPipeModule,


    MatDialogModule,
    BrowserAnimationsModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
