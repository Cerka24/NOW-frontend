import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {OpportunityComponent} from "./opportunity/opportunity.component";
import {OpportunityResolver} from "./resolvers/opportunity.resolver";
import {OrgOpportunityComponent} from "./org-opportunity/org-opportunity.component";
import {CreateOpportunityComponent} from "./create-opportunity/create-opportunity.component";

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
