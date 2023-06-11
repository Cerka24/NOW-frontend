import { Injectable } from '@angular/core';
import {Onboarding} from "../models/onboarding.model";
import {Observable, of, throwError} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {OnboardingMetadata} from "../models/onboarding-metadata.model";

@Injectable({
  providedIn: 'root'
})
export class OnboardingService {
  private readonly baseUrl: string = `${environment.backendUrl}/onboarding`;

  constructor(private http: HttpClient) { }
  onboarding(onboardingData: Onboarding):Observable<Onboarding>{
    const token = localStorage.getItem("authToken")
    const headerDict = {
      'Authorization': "Bearer " + token
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.post<Onboarding>(`${this.baseUrl}`, onboardingData, requestOptions)
  }

  getYearAndOrg(): Observable<OnboardingMetadata> {
    return this.http.get<OnboardingMetadata>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<Onboarding>{
    if(!id) {
      const error = new Error('An error occurred');
      throwError(error);
    }
    return this.http.get<Onboarding>(`${this.baseUrl}`);
  }
}
