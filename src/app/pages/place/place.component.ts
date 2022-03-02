import { Component, OnInit } from '@angular/core';
import { titleAnimation } from 'src/animations/title.animation';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss'],
  animations: [titleAnimation]
})
export class PlaceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
