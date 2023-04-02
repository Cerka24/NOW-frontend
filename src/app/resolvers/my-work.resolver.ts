import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {MyWork} from "../models/my-work.model";
import {MyWorkService} from "../services/my-work.service";

@Injectable({
  providedIn: 'root'
})
export class MyWorkResolver implements Resolve<MyWork[]> {
  constructor(private myWorkService: MyWorkService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MyWork[]> {
      const id = route.paramMap.get('id');
      if(!id) {
      // handle error
    }
    return this.myWorkService.getWork(+id!)
  }
}
