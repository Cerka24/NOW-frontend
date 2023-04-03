import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {OpportunityComponent} from "./opportunity/opportunity.component";
import {OpportunityResolver} from "./resolvers/opportunity.resolver";
import {OnboardingComponent} from "./onboarding/onboarding.component";
import {OnboardingResolver} from "./resolvers/onboarding.resolver";
import {StudentListComponent} from "./student-list/student-list.component";
import {StudentListResolver} from "./resolvers/student-list.resolver";
import {MyWorkComponent} from "./my-work/my-work.component";
import {MyWorkResolver} from "./resolvers/my-work.resolver";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "opportunity/:id",
    component: OpportunityComponent,
    resolve:{
      'opportunity': OpportunityResolver
    }
  },
  {
    path: "onboarding",
    component: OnboardingComponent,
    resolve:{
      'onboarding': OnboardingResolver
    }
  },
  {
    path:'studentList',
    component:StudentListComponent,
    resolve: {
      'studentLists': StudentListResolver
    }
   },
  {
    path: "myWork",
    component: MyWorkComponent,
    resolve:{
      'works': MyWorkResolver
    }
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
