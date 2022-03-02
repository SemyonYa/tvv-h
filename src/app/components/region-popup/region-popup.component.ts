import { Component, OnInit } from '@angular/core';
import { titleAnimation } from 'src/animations/title.animation';

@Component({
  selector: 'region-popup',
  templateUrl: './region-popup.component.html',
  styleUrls: ['./region-popup.component.scss'],
  animations: [titleAnimation],
})
export class RegionPopupComponent {
  name: string;
  x: number;
  y: number;

  close: () => void;
}
