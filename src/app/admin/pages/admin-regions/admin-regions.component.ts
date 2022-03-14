import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { titleAnimation } from 'src/animations/title.animation';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-admin-regions',
  templateUrl: './admin-regions.component.html',
  styleUrls: ['./admin-regions.component.scss'],
  animations: [titleAnimation],
})
export class AdminRegionsComponent {
  constructor(
    private data: DataService,
  ) { }

  regions$ = this.data.data()
    .pipe(
      tap(x => console.log(x)),
    );
}
