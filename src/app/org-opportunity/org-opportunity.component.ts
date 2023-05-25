import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Opportunity} from "../models/opportunity.model";
import {Subscription} from "rxjs";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-org-opportunity',
  templateUrl: './org-opportunity.component.html',
  styleUrls: ['./org-opportunity.component.css']
})
export class OrgOpportunityComponent implements OnInit, OnDestroy{

  private unsubscribe: Subscription[] = [];
  public opportunities: Array<Opportunity> = []
  private opportunityId!: number;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.unsubscribe.push(this.activatedRoute.data.subscribe(data => {
      this.opportunityId = data['orgOpportunity'];
      this.opportunities = data['orgOpportunity'];
      console.log("DATA :: ", data)
      console.log(this.opportunities)
    }));
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach(obs => obs.unsubscribe());
  }

  navigateToCreateOpportunity() {
    this.router.navigate([
      'orgOpportunity/createOpportunity'
    ]);
  }
  navigateToStudentList() {
    this.router.navigate([
      'orgOpportunity/studentList'
    ])
  }
  navigateToOpportunity(id: number){
    this.router.navigate([
      "opportunity/" + id
    ])
  }
}
