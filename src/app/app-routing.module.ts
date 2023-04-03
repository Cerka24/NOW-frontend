import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {OpportunityComponent} from "./opportunity/opportunity.component";
import {OpportunityResolver} from "./resolvers/opportunity.resolver";
import {OnboardingComponent} from "./onboarding/onboarding.component";
import {OnboardingResolver} from "./resolvers/onboarding.resolver";

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
