import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Image } from 'src/models/image';
import { AbstractRestService } from './_abstract.rest.service';

@Injectable({
  providedIn: 'root'
})
export class ImageRestService extends AbstractRestService<Image> {
  route: string = '/images';

  constructor(http: HttpClient) {
    super(http);
  }

  upload(formData: FormData): Observable<Image[]> {
    return this.http.post<Image[]>(`${this.url}`, formData);
  }

  setDeleted(ids: number[]) {
    return this.http.put(`${this.url}/set-deleted`, { ids });
  }

  getProductImageSet(productId: number): Observable<Image[]> {
    return this.http.get<Image[]>(`${this.url}/for-product/${productId}`);
  }
}
