import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseType } from '../models/Interface/roles';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  fetchDesignation(): Observable<ApiResponseType> {
    return this.http.get<ApiResponseType>(
      'https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation'
    );
  }
}
