import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import {Opportunity} from "../models/opportunity.model";
import {OpportunityService} from "../services/opportunity.service";

@Injectable({
  providedIn: 'root'
})
export class OpportunityResolver implements Resolve<Opportunity> {

  constructor(private opportunityService: OpportunityService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Opportunity> {
    const id: string = route.paramMap.get('id')!;
    if(!id) {
      // handle error
    }
    return this.opportunityService.getOpportunity(+id!)
  }
}
