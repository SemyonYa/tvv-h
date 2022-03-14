import { Component, OnInit } from '@angular/core';
import { titleAnimation } from 'src/animations/title.animation';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-admin-places',
  templateUrl: './admin-places.component.html',
  styleUrls: ['./admin-places.component.scss'],
  animations: [titleAnimation]
})
export class AdminPlacesComponent {
  constructor(private data: DataService) { }
  places$ = this.data.data();
}
