import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { titleAnimation } from 'src/animations/title.animation';
import { Place } from 'src/models/place';
import { Region } from 'src/models/region';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
  animations: [titleAnimation]
})
export class RegionComponent implements OnInit {

  constructor(
    private activatefRoute: ActivatedRoute,
    private data: DataService,
  ) { }

  region$: Observable<Region> = this.activatefRoute.params
    .pipe(
      switchMap(_params => this.data.getRegion(_params['regionId'])),
    );

  places$: Observable<Place[]> = this.activatefRoute.params
    .pipe(
      switchMap(_params => this.data.getPlaces(_params['regionId'])),
    );

  ngOnInit(): void {
  }

}
