import { Location } from '@angular/common';
import { Component, ComponentRef, ViewContainerRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, Observable, tap } from 'rxjs';
import { titleAnimation } from 'src/animations/title.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [titleAnimation]
})
export class AppComponent {
  title = 'Карта благовторительности';

  constructor(
    private location: Location,
    private router: Router,
  ) { }

  navVisible$: Observable<boolean> = this.router.events
    .pipe(
      // tap(x => console.log(x)),
      filter(e => e instanceof NavigationEnd),
      map(e => e as NavigationEnd),
      map(e => e.url !== '/' && e.urlAfterRedirects !== '/'),
    )

  back() {
    this.location.back();
  }
}
