import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {OpportunityComponent} from "./opportunity/opportunity.component";
import {OpportunityResolver} from "./resolvers/opportunity.resolver";
import {LandingComponent} from "./landing/landing.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {OrgRegisterComponent} from "./org-register/org-register.component";
import {MyWorkComponent} from "./my-work/my-work.component";
import {StudentListComponent} from "./student-list/student-list.component";
import {MyWorkResolver} from "./resolvers/my-work.resolver";

const routes: Routes = [
  {
    path: "",
    component: LandingComponent
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {

    path: "home",
    component: HomeComponent,
  },
  {
    path: "my-works",
    component: MyWorkComponent,
    resolve:{
      'works' : MyWorkResolver
    }
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "opportunity/:id",
    component: OpportunityComponent,
    resolve:{
      'opportunity': OpportunityResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
