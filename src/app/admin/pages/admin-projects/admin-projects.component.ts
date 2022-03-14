import { Component, OnInit } from '@angular/core';
import { titleAnimation } from 'src/animations/title.animation';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-admin-projects',
  templateUrl: './admin-projects.component.html',
  styleUrls: ['./admin-projects.component.scss'],
  animations: [titleAnimation]
})
export class AdminProjectsComponent {
  constructor(private data: DataService) { }
  projects$ = this.data.data();
}
