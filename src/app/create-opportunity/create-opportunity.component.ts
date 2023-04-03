import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Routes} from "@angular/router";
import {Subscription} from "rxjs";
import {CreateOpportunityService} from "../services/create-opportunity.service";
import {createOpportunity} from "../models/create-opportunity.model";

@Component({
  selector: 'app-create-opportunity',
  templateUrl: './create-opportunity.component.html',
  styleUrls: ['./create-opportunity.component.css']
})
export class CreateOpportunityComponent implements OnInit, OnDestroy{

  private unsubscribe: Subscription | undefined;
  private title: string = '';
  private description: string = '';
  private date: string = '';
  private requirements: string = '';
  private createOpportunity: createOpportunity | undefined;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private createOpportunityService: CreateOpportunityService) {}

  ngOnInit(): void {
    this.unsubscribe = this.activatedRoute.data.subscribe((data) => {
      console.log("DATA :: ", data)
      this.createOpportunity = data['createOpportunity'];
      this.title = data['createOpportunity'].title
      this.description = data['createOpportunity'].description
      this.date = data['createOpportunity'].date
      this.requirements = data['createOpportunity'].requirements
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe!.unsubscribe()
  }


  public create() {
    return this.router.navigate([
      'org-opportunityId'
    ])
  }
}
