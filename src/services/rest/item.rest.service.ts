import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from 'src/models/item';
import { AbstractRestService } from './_abstract.rest.service';

@Injectable({
  providedIn: 'root'
})
export class ItemRestService extends AbstractRestService<Item> {
  route: string = '/items';


  constructor(http: HttpClient) {
    super(http);
  }
}
