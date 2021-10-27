import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {ListMovieComponent} from "./movie/list-movie/list-movie.component";
import {CreateMovieComponent} from "./movie/create-movie/create-movie.component";


const routes: Routes = [
  {path:'', component: HomepageComponent},



  {path:'movie-list',component:ListMovieComponent},
  {path:'movie-create',component:CreateMovieComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
