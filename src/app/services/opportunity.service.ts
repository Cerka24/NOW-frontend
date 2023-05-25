import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Opportunity} from "../models/opportunity.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OpportunityService {
  private readonly baseUrl: string = `${environment.backendUrl}/orgOpportunity`;
  constructor(private http: HttpClient) {
  }

  getOpportunities(): Observable<Opportunity[]> {
    return this.http.get<Opportunity[]>(`${this.baseUrl}/opportunity`);
  }

  getOpportunity(opportunityId: number): Observable<Opportunity> {
    return this.http.get<Opportunity>(`${this.baseUrl}/${opportunityId}`);
  }

  createOpportunity(opportunity: Opportunity): Observable<Opportunity> {
    return this.http.post<Opportunity>(`${this.baseUrl}`, opportunity);
  }
}

