import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from "ngx-pagination";
import {ToastrModule} from 'ngx-toastr';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { MatDialogModule} from "@angular/material/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HomepageComponent } from './homepage/homepage.component';
import { DetailComponent } from './customer/detail/detail.component';
import {DeleteCustomerComponent} from "./customer/delete-customer/delete-customer.component";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CreateCustomerComponent,
    ListCustomerComponent,
    EditCustomerComponent,
    DetailComponent,
    DeleteCustomerComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    Ng2SearchPipeModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
