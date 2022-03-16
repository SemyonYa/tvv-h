import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, share, shareReplay, switchMap, tap } from 'rxjs';
import { titleAnimation } from 'src/animations/title.animation';
import { Item } from 'src/models/item';
import { Place } from 'src/models/place';
import { Project } from 'src/models/project';
import { DataService } from 'src/services/data.service';
import { ProjectRestService } from 'src/services/rest/project.rest.service';
import { FormState, State } from '../../components/form-state/form-state.component';

@Component({
  selector: 'app-admin-project-add',
  templateUrl: './admin-project-add.component.html',
  styleUrls: ['./admin-project-add.component.scss'],
  animations: [titleAnimation]
})
export class AdminProjectAddComponent {
  formState: FormState = { state: State.Initial };
  State = State;

  constructor(
    private data: DataService,
    private projectRest: ProjectRestService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }
  private _params = this.activatedRoute.params;
  private _places$: Observable<Place[]> = this._params
    .pipe(
      tap(x => console.log(x)),
      switchMap(_params => this.data.getPlaces(+_params['regionId'])),
      shareReplay(1),
      tap(x => console.log(x)),
    );
  places$: Observable<Place[]> = this._places$;
  place$: Observable<Place> = this._params
    .pipe(
      switchMap(_params => this._places$
        .pipe(
          map(_items => _items.find(_i => _i.id === +_params['placeId'])),
        ))
    )

  projectTypes$: Observable<Item[]> = this.data.getProjectTypes();

  submit(formValue: Partial<Project>) {
    this.formState = { state: State.InProgress };
    console.log(formValue);

    this.projectRest.post(formValue)
      .pipe()
      .subscribe({
        next: _item => {
          this.formState = { state: State.Success, msg: 'Успешно обновлено.' };

          setTimeout(() => {
            this.router.navigate(['/admin', 'regions', this.activatedRoute.snapshot.params['regionId'], 'places', formValue.placeId, 'projects']);
          }, 3000);
        },
        error: err => {
          this.formState = { state: State.Error, msg: err?.['message'] };
        }
      });
  }
}
