import { Injectable } from '@angular/core';
import {Onboarding} from "../models/onboarding.model";
import {Observable, of, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OnboardingService {
  private readonly baseUrl: string = `${environment.backendUrl}/onboarding`;

  constructor(private http: HttpClient) { }
  onboarding(OnboardingData: Onboarding):Observable<Onboarding>{
    return this.http.post<Onboarding>(`${this.baseUrl}`, OnboardingData)
  }

  getAll(): Observable<Onboarding[]> {
    return this.http.get<Onboarding[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<Onboarding>{
    if(!id) {
      const error = new Error('An error occurred');
      throwError(error);
    }
    return this.http.get<Onboarding>(`${this.baseUrl}/${id-1}`);
  }
}
