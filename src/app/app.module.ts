import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OpportunityService } from "./services/opportunity.service";
import {OpportunityResolver} from "./resolvers/opportunity.resolver";
import { MatCardModule} from "@angular/material/card";
import { HttpClientModule} from "@angular/common/http";
import { OpportunityComponent } from './features/opportunity/opportunity.component';
import { OnboardingComponent } from './features/onboarding/onboarding.component';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {OnboardingService} from "./services/onboarding.service";
import {OnboardingResolver} from "./resolvers/onboarding.resolver";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OpportunityComponent,
    OnboardingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ],
  providers: [
    OpportunityService,
    OpportunityResolver,
    OnboardingService,
    OnboardingResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
