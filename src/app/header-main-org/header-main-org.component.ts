import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OpportunityService} from "../services/opportunity.service";

@Component({
  selector: 'app-header-main-org',
  templateUrl: './header-main-org.component.html',
  styleUrls: ['./header-main-org.component.css']
})
export class HeaderMainOrgComponent {
  constructor(private router: Router) {}

  navigateToStudentList() {
    this.router.navigate([
      'orgOpportunity/student-list'
    ])
  }
  navigateToOrgOpportunity() {
    this.router.navigate([
      '/orgOpportunity'
    ]);
  }
  public logout(){
    localStorage.clear();
    this.router.navigate(["/"])
  }
}
