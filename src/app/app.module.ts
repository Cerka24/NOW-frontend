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
import { OnboardingComponent } from './onboarding/onboarding.component';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {OnboardingService} from "./services/onboarding.service";
import {OnboardingResolver} from "./resolvers/onboarding.resolver";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import { StudentListComponent } from './student-list/student-list.component';
import {MatTableModule} from "@angular/material/table";
import { MyWorkComponent } from './my-work/my-work.component';
import {MyWorkService} from "./services/my-work.service";
import {MyWorkResolver} from "./resolvers/my-work.resolver";
import { LoginComponent } from './login/login.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { HeaderAuthComponent } from './header-auth/header-auth.component';
import { RegisterComponent } from './register/register.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OpportunityComponent,
    LandingComponent,
    OnboardingComponent
    StudentListComponent,
    MyWorkComponent,
    RegisterComponent,
    LoginComponent,
    HeaderAuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatLegacyButtonModule
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
    MatTableModule,
    MatSnackBarModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  providers: [
    OpportunityService,
    OpportunityResolver,
    OnboardingService,
    OnboardingResolver
    MyWorkService,
    MyWorkResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
