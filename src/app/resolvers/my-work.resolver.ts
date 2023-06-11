import { Injectable } from '@angular/core';
import {
   Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {MyWork} from "../models/my-work.model";
import {OpportunityApplicationService} from "../services/opportunity-application";

@Injectable({
  providedIn: 'root'
})
export class MyWorkResolver implements Resolve<MyWork[]> {
  constructor(private opportunityApplicationService: OpportunityApplicationService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MyWork[]> {
    return this.opportunityApplicationService.getMyApplications()
  }
}
