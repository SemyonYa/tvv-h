import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { titleAnimation } from 'src/animations/title.animation';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [titleAnimation]
})
export class HomeComponent {
  constructor(
    private data: DataService,
    private router: Router,
  ) { }

  info$: Observable<string[]> = this.data.getInfo()
    .pipe(
      map(info => info.split('\n')),
    )

  mapClick(e: MouseEvent) {
    const parent = (e.target as SVGElement).parentNode as SVGElement;
    if (parent.classList.contains('group')) {
      const regionId = parent.dataset['id'];
      console.log(regionId);
      this.router.navigate(['region', regionId]);
    }
  }
}
