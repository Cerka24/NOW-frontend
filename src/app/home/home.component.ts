import {Component, OnDestroy, OnInit} from '@angular/core';
import {Opportunity} from "../models/opportunity.model";
import {ActivatedRoute, Router} from "@angular/router";
import {OpportunityService} from "../services/opportunity.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{

  public opportunities: Array<Opportunity> = []
  private unsubscribe: Subscription[] = [];

  private opportunityId!: number;

  title = "Now Home"

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private opportunityService: OpportunityService) {}

  ngOnInit(): void {
    this.opportunityService.getOpportunities().subscribe((data) => this.opportunities = data)
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach(obs => obs.unsubscribe());
  }

  navigateToOpportunity(id: number): void {
    const path = "opportunity/" + id
    this.router.navigate([path])
  }

  navigateToOrgOpportunity() {
    this.router.navigate([
      'org-opportunity'
    ]);
  }

  navigateToOnboarding(): void {
    const path = "onboarding"
    this.router.navigate([path])

  }

  navigateToMyWork(): void {
    const path = "my-works"
    this.router.navigate([path])
  }

}
