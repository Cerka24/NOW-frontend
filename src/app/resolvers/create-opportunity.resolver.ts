import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {CreateOpportunityService} from "../services/create-opportunity.service";

@Injectable({
  providedIn: 'root'
})
export class CreateOpportunityResolver implements Resolve<boolean> {

  constructor(private createOpportunityService:CreateOpportunityService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const id = route.paramMap.get('id')
    if(!id) {
      // throw an error
    }
    return of(true);
  }
}
