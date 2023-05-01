// import { Injectable } from '@angular/core';
// import {
//   Router, Resolve,
//   RouterStateSnapshot,
//   ActivatedRouteSnapshot
// } from '@angular/router';
// import { Observable, of } from 'rxjs';
// import {CreateOpportunityService} from "../services/create-opportunity.service";
// import {createOpportunity} from "../models/create-opportunity.model";
//
// @Injectable({
//   providedIn: 'root'
// })
// export class CreateOpportunityResolver implements Resolve<createOpportunity> {
//
//   constructor(private createOpportunityService:CreateOpportunityService) {
//   }
//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<createOpportunity> {
//     const id = route.paramMap.get('id')
//     if(!id) {
//       // throw an error
//     }
//     return this.createOpportunityService.
//   }
// }
