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
import { LoginComponent } from './login/login.component';
import {MatInputModule} from "@angular/material/input";
import {MatToolbarModule} from "@angular/material/toolbar";
import { HeaderAuthComponent } from './header-auth/header-auth.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSnackBarModule} from "@angular/material/snack-bar";

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
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatSnackBarModule,
    LoginComponent,
    MatToolbarModule,
    HeaderAuthComponent,
    RegisterComponent,
    FormsModule,
    ReactiveFormsModule
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
