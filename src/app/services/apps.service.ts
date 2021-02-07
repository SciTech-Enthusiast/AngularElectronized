import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestApiService } from './rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class AppsService extends RestApiService {
  /**
   *
   */
  constructor(httpClient:HttpClient) {
    super(httpClient);
    this.url="assets/json/apps.json"
  }
}
