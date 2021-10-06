import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentCreateComponent} from "./student-create/student-create.component";
import {StudentDetailComponent} from "./student-detail/student-detail.component";

const routes: Routes = [
  {path:"create",component:StudentCreateComponent},
  {path:"detail",component:StudentDetailComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
