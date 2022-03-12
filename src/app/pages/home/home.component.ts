import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { titleAnimation } from 'src/animations/title.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [titleAnimation]
})
export class HomeComponent {
  constructor(
    private router: Router,
  ) { }

  mapClick(e: MouseEvent) {
    const parent = (e.target as SVGElement).parentNode as SVGElement;
    if (parent.classList.contains('group')) {
      const name = parent.dataset['id'];
      console.log(name);
      this.router.navigate(['region']);
    }
  }
}
