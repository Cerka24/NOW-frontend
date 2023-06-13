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

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private opportunityService: OpportunityService) {}

  ngOnInit(): void {
    if(!localStorage.getItem("authToken")){
      this.router.navigate(["/"])
    }
    this.opportunityService.getOpportunities().subscribe((data) => this.opportunities = data)
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach(obs => obs.unsubscribe());
  }

  navigateToOpportunity(id: number): void {
    const path = "opportunity/" + id
    this.router.navigate([path])
  }
  navigateToApply() {
    this.router.navigate([
      'opportunity/:id/apply'
    ])
  }
}
