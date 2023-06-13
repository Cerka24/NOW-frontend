import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {OpportunityService} from "../services/opportunity.service";

@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.css']
})
export class HeaderMainComponent {


  constructor(private router: Router) {}

  public logout(){
    localStorage.clear();
    this.router.navigate(["/"])
  }
  navigateToOpportunities() {
    this.router.navigate([
      '/home'
    ]);
  }
  navigateToPortfolio() {
    this.router.navigate([
      '/portfolio'
    ]);
  }
  navigateToMyWork() {
    this.router.navigate([
      '/my-work'
    ]);
  }
}
