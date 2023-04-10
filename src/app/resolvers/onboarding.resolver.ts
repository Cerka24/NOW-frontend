import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import {OnboardingService} from "../services/onboarding.service";
import {Onboarding} from "../models/onboarding.model";

@Injectable({
  providedIn: 'root'
})
export class OnboardingResolver implements Resolve<Onboarding> {

  constructor(private onboardingService: OnboardingService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Onboarding> {
    const id = route.paramMap.get('id');
    if(!id) {
      // handle error
    }
    return this.onboardingService.getById(+id!)

  }
}
