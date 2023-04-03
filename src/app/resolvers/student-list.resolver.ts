import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {StudentListModel} from "../models/studentList.model";
import {StudentListService} from "../services/student-list.service";

@Injectable({
  providedIn: 'root'
})
export class StudentListResolver implements Resolve<StudentListModel[]> {

  constructor(private studentListService: StudentListService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<StudentListModel[]> {
    const id = route.paramMap.get('id');
    if(!id) {
      // handle error
    }
    return this.studentListService.getWork();
  }
}
