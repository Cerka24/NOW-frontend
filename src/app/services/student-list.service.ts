import { Injectable } from '@angular/core';
import {StudentListModel} from "../models/studentList.model";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StudentListService {
  private readonly baseUrl: string = `${environment.backendUrl}/students`;

  constructor(private http: HttpClient) { }

  getStudentList(): Observable<StudentListModel[]> {
    return this.http.get<StudentListModel[]>(`${this.baseUrl}/studentList`);
  }
}

