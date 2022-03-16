import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { titleAnimation } from 'src/animations/title.animation';
import { DataService } from 'src/services/data.service';
import { RegionRestService } from 'src/services/rest/region.rest.service';

@Component({
  selector: 'app-admin-regions',
  templateUrl: './admin-regions.component.html',
  styleUrls: ['./admin-regions.component.scss'],
  animations: [titleAnimation],
})
export class AdminRegionsComponent {
  constructor(
    // private data: DataService,
    private regionRest: RegionRestService
  ) { }

  regions$ = this.regionRest.getAll();
}
