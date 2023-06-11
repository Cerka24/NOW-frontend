import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Opportunity} from "../models/opportunity.model";
import {environment} from "../../environments/environment";
import {MyWork} from "../models/my-work.model";

@Injectable({
  providedIn: 'root'
})
export class OpportunityApplicationService {
  private readonly baseUrl: string = `${environment.backendUrl}/opportunity-application`;
  constructor(private http: HttpClient) {
  }

  getMyApplications(): Observable<Array<MyWork>> {
    const token = localStorage.getItem("authToken")
    const headerDict = {
      'Authorization': "Bearer " + token
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.get<Array<MyWork>>(`${this.baseUrl}/my`, requestOptions);
  }

  createApplication(additionalInfo: string, opportunityId: number): Observable<Opportunity> {
    const token = localStorage.getItem("authToken")
    const headerDict = {
      'Authorization': "Bearer " + token
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.post<Opportunity>(`${this.baseUrl}`, {additionalInfo: additionalInfo, opportunityId: opportunityId}, requestOptions);
  }


  acceptApplication(applicationId: number): Observable<Opportunity> {
    const token = localStorage.getItem("authToken")
    const headerDict = {
      'Authorization': "Bearer " + token
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.post<Opportunity>(`${this.baseUrl}/accept/${applicationId}`, {}, requestOptions);
  }

  denyApplication(applicationId: number): Observable<Opportunity> {
    const token = localStorage.getItem("authToken")
    const headerDict = {
      'Authorization': "Bearer " + token
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.post<Opportunity>(`${this.baseUrl}/reject/${applicationId}`, {}, requestOptions);
  }
}

