import { Component, OnInit } from '@angular/core';
import { titleAnimation } from 'src/animations/title.animation';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
  animations: [titleAnimation]
})
export class RegionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
