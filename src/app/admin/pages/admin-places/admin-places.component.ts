import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { titleAnimation } from 'src/animations/title.animation';
import { Region } from 'src/models/region';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-admin-places',
  templateUrl: './admin-places.component.html',
  styleUrls: ['./admin-places.component.scss'],
  animations: [titleAnimation]
})
export class AdminPlacesComponent {
  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute,
  ) { }

  region$: Observable<Region> = this.activatedRoute.params
    .pipe(
      tap(x => console.log(x)),
      switchMap(_params => this.data.getRegion(+_params['regionId'])),
    )
}
