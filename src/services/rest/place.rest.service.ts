import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Place } from 'src/models/place';
import { AbstractRestService } from './_abstract.rest.service';

@Injectable({
  providedIn: 'root'
})
export class PlaceRestService extends AbstractRestService<Place> {
  route: string = '/places';

  constructor(http: HttpClient) {
    super(http);
  }
}
