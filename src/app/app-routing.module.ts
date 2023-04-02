import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {OpportunityComponent} from "./opportunity/opportunity.component";
import {OpportunityResolver} from "./resolvers/opportunity.resolver";
import {MyWorkComponent} from "./my-work/my-work.component";
import {MyWorkResolver} from "./resolvers/my-work.resolver";

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
