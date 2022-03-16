import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, share, switchMap, take } from 'rxjs';
import { titleAnimation } from 'src/animations/title.animation';
import { Place } from 'src/models/place';
import { Region } from 'src/models/region';
import { DataService } from 'src/services/data.service';
import { PlaceRestService } from 'src/services/rest/place.rest.service';
import { FormState, State } from '../../components/form-state/form-state.component';

@Component({
  selector: 'app-admin-place-add',
  templateUrl: './admin-place-add.component.html',
  styleUrls: ['./admin-place-add.component.scss'],
  animations: [titleAnimation],
})
export class AdminPlaceAddComponent {
  formState: FormState = { state: State.Initial };
  State = State;

  constructor(
    private data: DataService,
    private placeRest: PlaceRestService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  private _regions$: Observable<Region[]> = this.data.getRegions()
    .pipe(
      share()
    );
  regions$ = this._regions$;

  region$: Observable<Region> = this.activatedRoute.params
    .pipe(
      switchMap(_params => this._regions$
        .pipe(
          map(_items => _items.find(_i => _i.id === +_params['regionId'])),
        )),
    );

  submit(formValue: Partial<Place>) {
    this.formState = { state: State.InProgress };

    this.placeRest.post(formValue)
      .pipe(
        take(1),
      )
      .subscribe({
        next: _item => {
          this.formState = { state: State.Success, msg: 'Успешно обновлено.' };

          setTimeout(() => {
            this.router.navigate(['admin', 'regions', formValue.regionId, 'places']);
          }, 3000);
        },
        error: err => {
          this.formState = { state: State.Error, msg: err?.['message'] };
        }
      });
  }


}
