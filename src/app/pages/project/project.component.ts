import { Component, OnInit } from '@angular/core';
import { titleAnimation } from 'src/animations/title.animation';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  animations: [titleAnimation]
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
