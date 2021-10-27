import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from "ngx-pagination";
import {ToastrModule} from 'ngx-toastr';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { MatDialogModule} from "@angular/material/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { HomepageComponent } from './homepage/homepage.component';
import { ListMovieComponent } from './movie/list-movie/list-movie.component';
import { CreateMovieComponent } from './movie/create-movie/create-movie.component';
import { DeleteMovieComponent } from './movie/delete-movie/delete-movie.component';


@NgModule({
  declarations: [
    AppComponent,

    HomepageComponent,

    ListMovieComponent,
    CreateMovieComponent,
    DeleteMovieComponent,



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
