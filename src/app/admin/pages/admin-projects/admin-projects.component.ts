import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { titleAnimation } from 'src/animations/title.animation';
import { Place } from 'src/models/place';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-admin-projects',
  templateUrl: './admin-projects.component.html',
  styleUrls: ['./admin-projects.component.scss'],
  animations: [titleAnimation]
})
export class AdminProjectsComponent {
  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute,
  ) { }

  place$: Observable<Place> = this.activatedRoute.params
    .pipe(
      switchMap(_params => this.data.getPlace(+_params['placeId'])),
    )
}
