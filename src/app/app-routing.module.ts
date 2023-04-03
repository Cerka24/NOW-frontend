import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {OpportunityComponent} from "./opportunity/opportunity.component";
import {OpportunityResolver} from "./resolvers/opportunity.resolver";
import {LandingComponent} from "./landing/landing.component";
import {OrgOpportunityComponent} from "./org-opportunity/org-opportunity.component";
import {CreateOpportunityComponent} from "./create-opportunity/create-opportunity.component";
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
    path: ":org-opportunityId",
    component: OrgOpportunityComponent,
    resolve:{
      'opportunity': OpportunityResolver
    }
  },
  {
    path:"org-opportunityId/createOpportunity",
    component:CreateOpportunityComponent
  },
  {
    path:"org-opportunityId",
    component:CreateOpportunityComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
