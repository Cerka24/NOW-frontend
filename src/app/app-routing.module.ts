import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {OpportunityComponent} from "./opportunity/opportunity.component";
import {OpportunityResolver} from "./resolvers/opportunity.resolver";
import {LandingComponent} from "./landing/landing.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {OnboardingResolver} from "./resolvers/onboarding.resolver";
import {OnboardingComponent} from "./onboarding/onboarding.component";
import {MyWorkComponent} from "./my-work/my-work.component";
import {MyWorkResolver} from "./resolvers/my-work.resolver";
import {StudentListResolver} from "./resolvers/student-list.resolver";
import {AddOpportunityComponent} from "./add-opportunity/add-opportunity.component";
import {OpportunitiesResolver} from "./resolvers/opportunities.resolver";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {ApplyOpportunityComponent} from "./apply-opportunity/apply-opportunity.component";


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
    component: RegisterComponent
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
    path: "my-work",
    component: MyWorkComponent,
    resolve:{
      'works' : MyWorkResolver
    }
  },
  {
    path: "portfolio",
    component: PortfolioComponent
  },
  {

    path: "onboarding",
    component: OnboardingComponent,
    resolve:{
      'onboarding': OnboardingResolver
     }
  },
  {
    path: 'create-opportunity',
    component: AddOpportunityComponent,
  },
  {
    path: "opportunity/:id",
    component: OpportunityComponent,
    resolve:{
      'opportunity': OpportunityResolver
    }
  },
  {
    path: "opportunity/:id/edit",
    component: AddOpportunityComponent,
    resolve:{
      'opportunity': OpportunityResolver
    }
  },
  {
    path: "opportunity/:id/apply",
    component: ApplyOpportunityComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
