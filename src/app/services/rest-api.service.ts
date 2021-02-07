import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {throwError } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  public url:string;
  
  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get(this.url).pipe(
      map(response => response),
      catchError(this.handleError));
  }

  create(resource) {
    return this.httpClient.post(this.url, JSON.stringify(resource)).pipe(
      map(response=>response),
      catchError(this.handleError)
    )
  }

  update(resource) {
    return this.httpClient.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true })).pipe(
      map(response=>response),
      catchError(this.handleError)
    )
  }

  delete(id) {
    return this.httpClient.delete(this.url + '/' + id).pipe(
      map(response=>response),
      catchError(this.handleError)
    )
  }

  private handleError(error: Response) {
    if (error.status === 400)
      return throwError(new BadInput(error.json()));

    if (error.status === 404)
      return throwError(new NotFoundError(error));

    return throwError(new AppError(error));
  }
}
