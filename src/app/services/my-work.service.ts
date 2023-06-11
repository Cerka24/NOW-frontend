import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {MyWork} from "../models/my-work.model";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MyWorkService {
  private readonly baseUrl: string = `${environment.backendUrl}/my-works`;
  constructor(private http: HttpClient) {}

  // getWork(): Observable<MyWork[]> {
  //   return this.http.get<MyWork[]>(`${this.baseUrl}`);
  // }
 getWork(): Observable<MyWork[]> {
    return of([
      {
        opportunity: 'Angular Developer (Vision)',
        organization: 'NSoft',
        date_created: '02.04.2023',
        status: 'APPROVED'
      },
      {
        opportunity: 'Java Developer',
        organization: 'Ministry of Programming',
        date_created: '01.04.2023',
        status: 'REJECTED'
      },
      {
        opportunity: 'DevSecOps Engineer',
        organization: 'SQA Consulting',
        date_created: '26.03.2023',
        status: 'APPROVED'
      },
      {
        opportunity: 'Python Developer',
        organization: 'walter code',
        date_created: '18.03.2023',
        status: 'APPROVED'
      },
      {
        opportunity: 'QA Manual Tester (Junior)',
        organization: 'QSD',
        date_created: '15.03.2023',
        status: 'REJECTED'
      },
      {
        opportunity: 'Product Specialist / Manager (Games)',
        organization: 'NSoft',
        date_created: '11.03.2023',
        status: 'APPROVED'
      },
      {
        opportunity: 'C++ Developer',
        organization: 'Bicom Systems',
        date_created: '02.03.2023',
        status: 'REJECTED'
      },
      {
        opportunity: 'Flutter developer',
        organization: 'SQA Consulting',
        date_created: '01.03.2023',
        status: 'APPROVED'
      }
    ]);
  }

  createWork(work: MyWork): Observable<MyWork> {
    console.log('Reached workService with intention to create work:', work);
    return of({
      opportunity: 'QA Manual Tester (Junior)',
      organization: 'QSD',
      date_created: '15.03.2023',
      pts: 60,
      status: 'REJECTED'
    });
  }
}
