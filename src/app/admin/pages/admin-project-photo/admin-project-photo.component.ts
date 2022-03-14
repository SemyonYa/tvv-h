import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, of, switchMap, tap } from 'rxjs';
import { titleAnimation } from 'src/animations/title.animation';
import { Image } from 'src/models/image';
import { ImageRestService } from 'src/services/rest/image.rest.service';

@Component({
  selector: 'app-admin-project-photo',
  templateUrl: './admin-project-photo.component.html',
  styleUrls: ['./admin-project-photo.component.scss'],
  animations: [titleAnimation],
})
export class AdminProjectPhotoComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private imageRest: ImageRestService,
  ) { }

  private _params$ = this.activatedRoute.params

  timeParam$: Observable<TimeParamType> = this._params$
    .pipe(
      tap(x => console.log(x)),
      map(ps => ps['time'] as TimeParamType)
    );

  images2$: Observable<Image[]> = this._params$
    .pipe(
      switchMap(
        _params => of([1, 2, 3, 4, 5, 6, 7])
          .pipe(
            map(
              _items => _items.map(_i =>
                ({ id: _i, thumb: `assets/fake/category${_i}.jpg`, large: `assets/fake/category${_i}.jpg` } as Image)
              )
            )
          )
      )
    );

  images$: Observable<Image[]> = this._params$
    .pipe(
      switchMap(
        _params => this.imageRest
          .getAll(
            new HttpParams()
              .set('projectId', _params['projectId'])
              .set('time', _params['time'])
          )
      )
    );

  ngOnInit(): void {
  }

}

export type TimeParamType = 'before' | 'after';
