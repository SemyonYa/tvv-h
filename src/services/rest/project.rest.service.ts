import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from 'src/models/project';
import { AbstractRestService } from './_abstract.rest.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectRestService extends AbstractRestService<Project> {
  route: string = '/projects';

  constructor(http: HttpClient) {
    super(http);
  }
}
