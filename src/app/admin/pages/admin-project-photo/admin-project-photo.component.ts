import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { titleAnimation } from 'src/animations/title.animation';
import { TimeParamType } from 'src/models/helpers/time-param.type';
import { Image } from 'src/models/image';
import { Project } from 'src/models/project';
import { DataService } from 'src/services/data.service';
import { ImageRestService } from 'src/services/rest/image.rest.service';

@Component({
  selector: 'app-admin-project-photo',
  templateUrl: './admin-project-photo.component.html',
  styleUrls: ['./admin-project-photo.component.scss'],
  animations: [titleAnimation],
})
export class AdminProjectPhotoComponent {

  constructor(
    private activatedRoute: ActivatedRoute,
    public imageRest: ImageRestService,
    private data: DataService,
  ) { }

  params: Params = this.activatedRoute.snapshot.params;
  time: TimeParamType = this.params['time'] as TimeParamType;

  project$: Observable<Project> = this.data.getProject(this.params['projectId'])
    .pipe(
      tap(x => console.log(x)),
    );

  addSelectedPhoto(image: Image): void {
    this.project$ = this.imageRest.addPhotosToProject(+this.params['projectId'], [image.id], this.params['time'])
      .pipe(
        tap(x => console.log(x)),
        switchMap(_ => this.data.getProject(this.params['projectId'])),
      );
  }

  addLoadedPhotos(images: Image[]): void {
    this.project$ = this.imageRest.addPhotosToProject(+this.params['projectId'], images.map(_i => _i.id), this.params['time'])
      .pipe(
        switchMap(_ => this.data.getProject(this.params['projectId'])),
        tap(x => console.log(x)),
      );
  }

  removePhotoFromProject(imageId: number) {
    this.project$ = this.imageRest.removePhotoFromProject(+this.params['projectId'], imageId)
      .pipe(
        switchMap(_ => this.data.getProject(this.params['projectId'])),
      )
  }

  setMain(imageId: number) {
    if (this.params['time'] === 'after')
      this.project$ = this.imageRest.setMain(this.params['projectId'], imageId)
        .pipe(
          switchMap(_ => this.data.getProject(this.params['projectId'])),
          tap(x => console.log(x)),
        );
  }
}

