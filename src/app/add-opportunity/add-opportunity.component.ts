import { Component } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {OpportunityService} from "../services/opportunity.service";
import {Opportunity} from "../models/opportunity.model";

@Component({
  selector: 'app-add-opportunity',
  templateUrl: './add-opportunity.component.html',
  styleUrls: ['./add-opportunity.component.css']
})
export class AddOpportunityComponent {
  private opportunityId!: number;
  private unsubscribe: Subscription[] = [];

  constructor(private opportunityService: OpportunityService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.unsubscribe.push(this.activatedRoute.data.subscribe(data => {
      this.opportunityId = data['orgOpportunity'];
      console.log("DATA :: ", data)
    }));
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach(obs => obs.unsubscribe());
  }

  createOpportunity(opportunity: Opportunity): void {
    this.opportunityService.createOpportunity(opportunity).subscribe(() => {
      this.navigateToOpportunities();
    });
  }

  private navigateToOpportunities() {
    this.router.navigate([
      // this.opportunityId,
      'orgOpportunity/opportunity'
    ]);
  }
}
