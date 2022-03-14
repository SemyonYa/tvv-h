import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Region } from 'src/models/region';
import { AbstractRestService } from './_abstract.rest.service';

@Injectable({
  providedIn: 'root'
})
export class RegionRestService extends AbstractRestService<Region> {
  route: string = '/regions';


  constructor(http: HttpClient) {
    super(http);
  }
}
