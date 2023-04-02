import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OpportunityService } from "./services/opportunity.service";
import {OpportunityResolver} from "./resolvers/opportunity.resolver";
import { MatCardModule} from "@angular/material/card";
import { HttpClientModule} from "@angular/common/http";
import { OpportunityComponent } from './opportunity/opportunity.component';
import { MyWorkComponent } from './my-work/my-work.component';
import {MatTableModule} from "@angular/material/table";
import {MyWorkService} from "./services/my-work.service";
import {MyWorkResolver} from "./resolvers/my-work.resolver";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OpportunityComponent,
    MyWorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [
    OpportunityService,
    OpportunityResolver,
    MyWorkService,
    MyWorkResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
