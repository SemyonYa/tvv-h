import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { titleAnimation } from 'src/animations/title.animation';
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

}
