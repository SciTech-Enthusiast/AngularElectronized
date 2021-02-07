import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';

@Injectable({
  providedIn: 'root'
})

export class PostService extends RestApiService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url='http://jsonplaceholder.typicode.com/posts';
  }
}
