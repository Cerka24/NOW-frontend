import { Component } from '@angular/core';
import {Opportunity} from "../models/opportunity.model";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.css']
})
export class OpportunityComponent {

  public title: string = ''
  public description: string = ''
  public coverImage: string = ''

  private opportunity: Opportunity | undefined;
  private unsubscribe: Subscription | undefined;


  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }
}
