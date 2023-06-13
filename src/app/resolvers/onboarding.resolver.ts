import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from "../services/user-service";
import {UserModel} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class OnboardingResolver implements Resolve<UserModel> {

  constructor(private userService: UserService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserModel> {
    return this.userService.getProfile();
  }
}
