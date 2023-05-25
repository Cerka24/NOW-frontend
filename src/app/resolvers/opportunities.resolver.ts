import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {OpportunityService} from "../services/opportunity.service";
import {Opportunity} from "../models/opportunity.model";

@Injectable({
  providedIn: 'root'
})
export class OpportunitiesResolver implements Resolve<Opportunity[]> {

  constructor(private opportunityService:OpportunityService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Opportunity[]> {
    const opportunitiesId: string = route.paramMap.get('orgOpportunity/opportunity')!;
    return this.opportunityService.getOpportunities();
  }
}
