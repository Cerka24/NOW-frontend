import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Opportunity} from "../models/opportunity.model";
import {Subscription} from "rxjs";
import {OpportunityService} from "../services/opportunity.service";

@Component({
  selector: 'app-org-opportunity',
  templateUrl: './org-opportunity.component.html',
  styleUrls: ['./org-opportunity.component.css']
})
export class OrgOpportunityComponent implements OnInit, OnDestroy{

  public opportunities: Array<Opportunity> = []
  private unsubscribe: Subscription | undefined;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private opportunityService: OpportunityService) {}

  ngOnInit(): void {
    this.unsubscribe = this.opportunityService.getAll().subscribe((data) => this.opportunities = data)
  }

  ngOnDestroy(): void {
    this.unsubscribe!.unsubscribe()
  }

  navigateToOrgOpportunity() {
    this.router.navigate([
      'org-opportunityId/createOpportunity'
    ]);
  }
}
