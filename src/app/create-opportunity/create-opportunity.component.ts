import { Component } from '@angular/core';
import {Router, Routes} from "@angular/router";

@Component({
  selector: 'app-create-opportunity',
  templateUrl: './create-opportunity.component.html',
  styleUrls: ['./create-opportunity.component.css']
})
export class CreateOpportunityComponent {
  constructor(private router:Router) {
  }

  public navigateBack() {
    return this.router.navigate([
      'org-opportunityId'
    ])
  }
}
