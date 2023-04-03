import { Injectable } from '@angular/core';
import {StudentListModel} from "../models/studentList.model";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentListService {

  constructor() { }

  getWork(): Observable<StudentListModel[]> {
    return of([
      {
        id: 1,
        student: 'John Doe',
        joined_on: '02.04.2023',
        email: 'johndoe@email.com',
        rate: '80%',
        completed: 25,
        points: 80,
      },
      {
        id: 2,
        student: 'John Doe1',
        joined_on: '10.05.2023',
        email: 'johndoe1@email.com',
        rate: '60%',
        completed: 45,
        points: 70,
      }
    ]);
  }
}

