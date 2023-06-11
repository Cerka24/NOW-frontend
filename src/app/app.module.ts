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
import { OrgOpportunityComponent } from './org-opportunity/org-opportunity.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { LogoutComponent } from './logout/logout.component';
import { CreateOpportunityComponent } from './create-opportunity/create-opportunity.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
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
import { RegisterComponent } from './register/register.component';
import { OrgRegisterComponent } from './org-register/org-register.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {HeaderAuthComponent} from "./header-auth/header-auth.component";
import { AddOpportunityComponent } from './add-opportunity/add-opportunity.component';
import {MatFormFieldControl} from "@angular/material/form-field";
import { HeaderGuestComponent } from './header-guest/header-guest.component';
import { HeaderMainComponent } from './header-main/header-main.component';
import { HeaderMainOrgComponent } from './header-main-org/header-main-org.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ApplicantListComponent } from './applicant-list/applicant-list.component';
import { ApplyOpportunityComponent } from './apply-opportunity/apply-opportunity.component';
import {NgOptimizedImage} from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OpportunityComponent,
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    OrgRegisterComponent,
    OrgOpportunityComponent,
    LogoutComponent,
    CreateOpportunityComponent,
    OnboardingComponent,
    StudentListComponent,
    MyWorkComponent,
    HeaderAuthComponent,
    AddOpportunityComponent,
    HeaderGuestComponent,
    HeaderMainComponent,
    HeaderMainOrgComponent,
    PortfolioComponent,
    ApplicantListComponent,
    ApplyOpportunityComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        HttpClientModule,
        MatGridListModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        FormsModule,
        MatOptionModule,
        MatSelectModule,
        MatTableModule,
        MatSnackBarModule,
        MatToolbarModule,
        ReactiveFormsModule,
        NgOptimizedImage
    ],
  providers: [
    OpportunityService,
    OpportunityResolver,
    OnboardingService,
    OnboardingResolver,
    MyWorkService,
    MyWorkResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
