import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractRestService<T> {
  abstract route: string;
  get url(): string {
    return `${environment.baseUrl}${this.route}`;
  }

  constructor(
    protected http: HttpClient
  ) { }

  getAll(params?: HttpParams): Observable<T[]> {
    return this.http.get<T[]>(this.url, { params });
  }
  getOne(id: number, params?: HttpParams): Observable<T[]> {
    return this.http.get<T[]>(`${this.url}/${id}`, { params });
  }
  post(item: Partial<T>, params?: HttpParams) {
    return this.http.post<T[]>(this.url, item, { params });
  }
  put(item: Partial<T>, id: number, params?: HttpParams) {
    return this.http.put<T[]>(`${this.url}/${id}`, item, { params });
  }
  delete(id: number, params?: HttpParams) {
    return this.http.delete<T[]>(`${this.url}/${id}`, { params });
  }
}
