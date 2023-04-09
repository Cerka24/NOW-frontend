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
import { LandingComponent } from './landing/landing.component';
import {MatLegacyButtonModule} from "@angular/material/legacy-button";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OrgRegisterComponent } from './org-register/org-register.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OpportunityComponent,
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    OrgRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatLegacyButtonModule
  ],
  providers: [
    OpportunityService,
    OpportunityResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
