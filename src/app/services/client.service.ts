import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponseType } from '../models/Interface/roles';
import { Observable } from 'rxjs';
import { Client } from '../models/Class/Client';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  getAllClients(): Observable<ApiResponseType> {
    return this.http.get<ApiResponseType>(
      environment.API_URL + 'GetAllClients'
    );
  }

  addUpdateClient(obj: Client): Observable<ApiResponseType> {
    return this.http.post<ApiResponseType>(
      environment.API_URL + 'AddUpdateClient',
      obj
    );
  }
  deleteClientById(id: number): Observable<ApiResponseType> {
    return this.http.delete<ApiResponseType>(
      environment.API_URL + 'DeleteClientByClientId?clientId=' + id
    );
  }
}
