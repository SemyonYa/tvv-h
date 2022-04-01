import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { titleAnimation } from 'src/animations/title.animation';
import { ProjectType } from 'src/models/helpers/project-type';
import { Image } from 'src/models/image';
import { Place } from 'src/models/place';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss'],
  animations: [titleAnimation]
})
export class PlaceComponent {

  constructor(
    private activatefRoute: ActivatedRoute,
    private data: DataService,
  ) { }

  place$: Observable<Place> = this.activatefRoute.params
    .pipe(
      switchMap(_params => this.data.getPlace(_params['placeId'])),
    );

  getMainImage(list: Image[], id: number, projectType: ProjectType): Image {
    let image = list.find(i => i.id === id);
    if (image)
      return image;

    if (projectType === ProjectType.School)
      return { large: '/assets/icons/school.svg' } as Image;
    if (projectType === ProjectType.Kindergarten)
      return { large: '/assets/icons/kindergarten.svg' } as Image;
    if (projectType === ProjectType.Hospital)
      return { large: '/assets/icons/hospital.svg' } as Image;
    if (projectType === ProjectType.Culture)
      return { large: '/assets/icons/culture.svg' } as Image;
    if (projectType === ProjectType.Pipes)
      return { large: '/assets/icons/pipes.svg' } as Image;

    return null;
  }
}
